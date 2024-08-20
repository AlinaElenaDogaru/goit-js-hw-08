"use strict"

import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';



const player = new Vimeo('vimeo-player');

const throttleSavePlaybackTime = throttle(savePlaybackTime, 1000);

function savePlaybackTime(time) {
  localStorage.setItem('videoplayer-current-time', time);
}

player.on('timeupdate', (data) => {
  throttleSavePlaybackTime(data.seconds);
});

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime).then(() => {
    player.play();
  });
};

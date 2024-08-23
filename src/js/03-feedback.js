"use strict";
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message');

// Funcție pentru a salva starea formularului în local storage
const save = () => {
     const feedbackFormState = {
        email: emailInput.value,
        message: messageInput.value
    };
    
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState))
};

form.addEventListener("input", throttle(save, 500));

// Funcție pentru a încărca starea formularului din local storage

const loadFunction = () => {

   const savedContent = localStorage.getItem("feedback-form-state");
   if (savedContent) {
       const { email, message } = JSON.parse(savedContent);
       emailInput.value = email;
        messageInput.value = message;
    }
}
       
window.addEventListener("load", loadFunction);

// Funcție pentru a afișa obiectul cu câmpurile email și message în consolă
const handleSubmit = (event) => {
    event.preventDefault();
    const feedbackFormState = {
        email: emailInput.value,
        message: messageInput.value
    };
    console.log(feedbackFormState);
    localStorage.removeItem("feedback-form-state");
}

form.addEventListener("submit", handleSubmit);
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

let storege = JSON.parse(localStorage.getItem("feedback-form-state"))
let feedbackText = { email: '', massage: '' };
input.placeholder = 'твоя пошта';
textarea.placeholder = 'твоє повідомлення';

if (storege) {
    feedbackText.email = storege.email; feedbackText.massage = storege.massage;
    input.value = storege.email; textarea.value = storege.massage;
};
form.addEventListener('input', throttle(onInput, 500));

function onInput(evnt) {
    evnt.preventDefault();
    if (evnt.target.name === "email") {
        feedbackText.email = evnt.target.value;
    };
    if (evnt.target.name === "message") {
        feedbackText.massage = evnt.target.value;
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackText))
};

form.addEventListener('submit', (evnt) => {
    evnt.preventDefault()
    if (!input.value) {
        input.focus()
        input.placeholder = 'Вводь свою пошту сюди!';
    } else if (!textarea.value) {
        textarea.focus()
        textarea.placeholder = 'Вводь своє повідомлення сюди!';
    } else {
        console.dir(feedbackText);
        localStorage.removeItem("feedback-form-state");
        input.value = ""; textarea.value = ""
    }
})
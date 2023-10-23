import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

let storege = JSON.parse(localStorage.getItem("feedback-form-state"))
let feedbackText = { email: '', massage: '' };

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
        let baner = alert('Ваша пошта прозора?')
        console.log(baner);
        if (baner === undefined) {
            input.focus()
        }
    } else {
        console.dir(feedbackText);
        localStorage.removeItem("feedback-form-state");
        input.value = ""; textarea.value = ""
    }
})
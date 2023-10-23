import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

let storege = JSON.parse(localStorage.getItem("feedback-form-state"))
let feedbackText = { email: '', massage: '' };
if (storege) {
    feedbackText.email = storege.email
    feedbackText.massage = storege.massage
    input.value = storege.email;
    textarea.value = storege.massage;
};

form.addEventListener('input', throttle(onInput, 500));

form.addEventListener('submit', onClick);
function onClick(evnt) {
    evnt.preventDefault();
    evnt.stopPropagation()
    console.dir(storege);
    localStorage.removeItem("feedback-form-state");
    input.value = "";
    textarea.value = "";
}

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





// const input = form.querySelector("input")
// const textarea = form.querySelector('textarea')

// input.addEventListener("click", (e) => console.log(e.currentTarget.value))
// submit.addEventListener('click', () => {
//     console.log('helo');
//     // const console = localStorage.getItem("feedback-form-state");
//     // return console.log(JSON.parse(console))
// })

// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли - елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол - елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол - елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem(його попереднього сусіда).
// elem.previousElementSibling - вибере вузол - елемент «зліва» від elem(його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem(його наступного сусіда)
// elem.nextElementSibling - вибере вузол - елемент «праворуч» від elem(його наступного сусіда).

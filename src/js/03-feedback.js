import { throttle } from "lodash";

// прив'язуємо значення
const form = document.querySelector('form');
const formEmail = document.querySelector('form input');
const formMessage = document.querySelector('form textarea');
const formSubmit = document.querySelector('form button');

// створюємо об'єкт для зберігання в локальному сховищі

const formData = {
    email: formEmail.value,
    message: formMessage.value,
};

//перевірка стану сховища та заповненя форми в разі приисутності даних

if (localStorage.getItem('feedback-form-state') != null) {
    const values = JSON.parse(localStorage.getItem('feedback-form-state'));
    formEmail.value = values.email;
    formMessage.value = values.message;
}

//Зчитування і запис в локал під час вводу
form.addEventListener('input', throttle(e => {
    formData.email = formEmail.value;
    formData.message = formMessage.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));

// обробка натискання кнопки Submit
form.addEventListener('submit', e => {
    e.preventDefault();
    if (JSON.parse(localStorage.getItem('feedback-form-state') == null))
        console.log("Заповніть форму");

    else console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    formEmail.value = '';
    formMessage.value = '';
    localStorage.clear();
});


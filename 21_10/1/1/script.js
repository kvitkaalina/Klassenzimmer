// Напишите форму в которой 1 инпут и кнопка отправить. Надо вывести в консоль введенное в инпут по клику на кнопку

const form = document.querySelector('.form')
const btn = document.querySelector('.btn')
const mainInput = document.querySelector('#main__input')

// добавляет обработчик события клика к кнопке. Каждый раз, когда кнопка нажата, в консоль выводится событие клика.               
btn.addEventListener('click', (event) => {
    console.log(event);
});


// добавляет обработчик события отправки формы. Мы используем e.preventDefault(), чтобы остановить стандартное поведение формы (перезагрузку страницы). Затем выводим значение инпута в консоль: console.log(mainInput.value).
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(mainInput.value); // Выводим значение инпута
});

// добавляет обработчик события input к текстовому полю. Каждый раз, когда значение инпута меняется, текущее значение выводится в консоль: console.log(e.target.value).

mainInput.addEventListener('input', (e) => {
    console.log(e.target.value);
});


// 2. Теперь вывести на страницу в h3 по клику на кнопку отправить то, что пользователь написал в инпут

const form1 = document.querySelector('.form1');
const mainInput1 = document.querySelector('#main__input1');
const btn1 = document.querySelector('.btn1');
const output = document.querySelector('#output');

// Добавляем событие 'submit' к форме
form1.addEventListener('submit', (e) => {
    e.preventDefault(); // Останавливаем стандартное поведение формы (перезагрузку страницы)
    console.log(mainInput1.value); // Выводим значение инпута в консоль
    output.innerText = mainInput1.value; // Выводим значение инпута в элемент h3
});

mainInput1.addEventListener('input', (e) => {
    console.log(e.target.value); 
});


const btnE = document.querySelector('.btn_email')
const formE = document.querySelector('.formE')
const inputE = document.querySelector('#input_email')
const text = document.createElement('h3')

formE.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = e.target['input_email'].value;
    if ((v.length > 0) && v.includes('@')) {
        text.innerText = 'Форма отправлена';
        inputE.insertAdjacentElement('afterend', text);
    } else {
        text.innerText = 'Введите корректный email';
        inputE.insertAdjacentElement('afterend', text);
    }
    e.target['input_email'].value = '';
})







  



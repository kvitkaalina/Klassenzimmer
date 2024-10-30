// const btn1 = document.querySelector('btn')
// btn1.addEventListener('click', function() {
//     console.log('Hello');
    
// }
// )

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let userdata = e.target[0].value
//     const newEl = document.createElement('div')
//     newEl.innerText = userdata
//     document.body.insertAdjacentElement('beforeend', newEl)
//     e.target[0].value = ''
// })

const btn = document.querySelector('#btn')
const form = document.querySelector('#form')
const text = document.querySelector('.text')

// 1. element.addEventListener - вызываем слушатель события, он принимает 2 аргумента: событие(нап. click, onmouseover, onmouseend, keydown и тд) и слушатель (listener). Listener - это коллбек () => {}
// 2. e.target - внутренности вашего элемента, то, из каких свойств состоит этот объект (элемент), пример на 4 строке
// 3. При работе с формами мы должны сбрасывать дефолтное поведение элемента, например, e.preventDefault()
// 4. Существую методы добавления удаления элементов из дом дерева: append,insertAdjacentElementm, remove(), lastChild, appendChild, textContent, innerHTML, innerText
// 5.style
// btn.addEventListener('click', () => {
//     text.style.background = 'white'
//     document.body.style.background = 'red'
// })

btn.addEventListener('click', () => {
    //если применяется много инлайн стилей за раз, лучше писать не в строку напрямую через style, а через setAttribute
    text.setAttribute('style', `
        background: white;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid black;
        `)

    document.body.style.background = 'red'
})


// У вас есть элемент, задайте ему базовые значения ширины, высоты и цвета фона. При клике на кнопку измените его ширину на 100px с использованием setAttribute.
const btn1 = document.getElementById('btn1');
const element = document.getElementById('element');
// Добавляем обработчик события клика к кнопке.
btn1.addEventListener('click', () => {
// Изменяем атрибут style элемента <div>, чтобы задать новую ширину 100px, сохраняя остальные стили.
    element.setAttribute('style', `
        width: 100px;
        height: 50px;
        background-color: lightblue;
    `);
});
// У вас есть элемент. При клике на кнопку примените несколько произвольных стилей с использованием cssText.
const btn2 = document.getElementById('btn2');
const element2 = document.getElementById('element2');

btn2.addEventListener('click', () => {
    element2.setAttribute ('style',`
        background-color: coral;
        border: 2px solid black;
        border-radius: 10px;
        width: 100px;
        height: 50px;
        background-color: lightblue;
    `)
});

// У вас есть текст. При клике на кнопку измените цвет текста с использованием объекта style.

const btn3 = document.getElementById('btn3'); 
const text1 = document.getElementById('text1');

btn3.addEventListener('click', () => {
    text1.style.color = 'red'
})



const newEl = document.createElement('p')
newEl.classList.add('newElement')
newEl.textContent = 'hello wolrd from new p'
text.innerHTML = ``
text.insertAdjacentElement('afterbegin', newEl)

// text: Это существующий элемент, относительно которого будет происходить вставка.

// insertAdjacentElement: Метод для вставки нового элемента в определенное место относительно существующего элемента.

// 'afterbegin': Позиция, указывающая, куда вставить новый элемент:

// 'beforebegin': Перед text элементом.

// 'afterbegin': Внутри text, перед его первым дочерним элементом.

// 'beforeend': Внутри text, после его последнего дочернего элемента.

// 'afterend': После text элемента.

// newEl: Новый элемент, который будет вставлен.

const buttons = document.querySelectorAll('.btn');
const textBlock = document.getElementById('text');
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function() {
        if(!textBlock.classList.contains('active')){
            textBlock.classList.add('active')
        }
    })
}





                





  



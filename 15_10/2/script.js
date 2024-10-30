const container = document.querySelector('.container')
console.log(container);
container.innerHTML = `Hello world <h3> text </h3>`



const image = document.querySelector('#image')
//первый параметр - имя нужного нам атрибута, второй параметр - значение атрибута (в случае картинки - путь)
image.setAttribute('src', './assets/cat.png')
console.log(image);
const input = document.querySelector('#input')
input.value = 'hello world'
input.disabled = true
console.log(input.value);

console.log('///');

const content = document.querySelector('.content')
//создаем елементы на страницу
const title = document.createElement('.h3')
title.innerText = 'New title'
content.append(title)




const h3 = document.querySelector('.h3')
h3.innerText = 'ddhdjkddkd'

const img2 = document.querySelector('#img2')
img2.setAttribute('scr', './assets/cat.png')
console.log(img2);

const random = document.querySelector('.random')
random.innerHTML = `<h4> Hello </h4>`










 
 




































































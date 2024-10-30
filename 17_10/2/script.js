// У вас есть блок текста и несколько кнопок. При клике на каждую кнопку, удалите класс "highlight" у блока текста, если он присутствует.
// Изначально highlight должен быть
const buttons = document.querySelectorAll('.btn');
const textBlock = document.getElementById('text');

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         if (textBlock.classList.contains('highlight')) {
//             textBlock.classList.remove('highlight');
//         }
//     });
// }
// / function remover(item) {
//     for(let i = 0; i < newEl.classList.length; i++) {
//         if(newEl.classList[i] !== item) {
//             console.log(newEl.classList[i]);
//         }   
//     }
// }
// remover('newItemElementClass')

// const example = document.querySelector('#example')
// const textContentResult = document.querySelector('#textContentResult')
// const innerTextResult = document.querySelector('#innerTextResult')

// const innerExample = example.innerText
// const textContentExample = example.textContent

// console.log(innerExample, textContentExample);

// textContentResult.textContent = textContentExample
// innerTextResult.innerText = innerExample
// const showBlock = () => {
//     const element = document.querySelector(".children");
//     console.log(element);
//     element.classList.replace("hidden", "shown");
//   };

//   const hideBlock = () => {
//     const element = document.querySelector(".children");
//     element.classList.replace("shown", "hidden");
//   };

// const show = document.querySelector('#show')
// const hide = document.querySelector('#hide')
//     const toggleBtn = document.querySelector('.toggleBtn')
//     const el = document.querySelector('.children')
//     toggleBtn.addEventListener('click', () => {
//         el.classList.toggle('hidden')
//     })
//    // 1. обратиться к элементу, к которому вы хотите добавить какой - то класс
// 2. повесить на него toggle('newClass')
// 3. метод toggle будет добавлять нужный вам класс если его еще нет, а если он уже есть, то будет его убирать
// Аналог
// if(!class.classList.contains('active')) {
//     class.classList.remove('active')
// } else {
//     class.classList.add('active')   
// }


const container = document.querySelector('.container')
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')
container.append(btn1, btn2)
btn1.innerText = 'click'
btn2.innerText = 'click2'

const p = document.createElement('p')
p.innerText = 'Добавления текста в элимент'
container.insertAdjacentElement('afterbegin', p)
const arr =['1', '2', '3', 'lorem12323lorem12323']
const list = document.createElement('ul')
p.insertAdjacentElement('afterend', list)

function arrFn (randomArr) {
    for (let k of randomArr){
       const li = document.createElement('li')
       li.innerText = k
       list.append(li)
        
    }
} 
arrFn(arr);

const span = document.createElement('span')

btn1.addEventListener('click', function() {
    p.classList.add('content')
    document.body.style.background = 'magenta'
    span.innerHTML = ''


})
btn2.addEventListener('click', function(){
    p.classList.remove('content')
     document.body.style.background = 'unset'
     span.innerText = 'Эти стили были ужасные'
     span.classList.add('text')
     container.append(span)

} )
















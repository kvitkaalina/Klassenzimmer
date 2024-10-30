// const container = document.querySelector('.container')
// console.log(container);
// container.innerHTML = `Hello world <h3> text </h3>`



// const image = document.querySelector('#image')
//первый параметр - имя нужного нам атрибута, второй параметр - значение атрибута (в случае картинки - путь)
// image.setAttribute('src', './assets/cat.png')
// console.log(image);
// const input = document.querySelector('#input')
// input.value = 'hello world'
// input.disabled = true
// console.log(input.value);

// console.log('///');

// const content = document.querySelector('.content')
// //создаем елементы на страницу
// const title = document.createElement('.h3')
// title.innerText = 'New title'
// content.append(title)




// const h3 = document.querySelector('.h3')
// h3.innerText = 'ddhdjkddkd'

// const img2 = document.querySelector('#img2')
// img2.setAttribute('scr', './assets/cat.png')
// console.log(img2);

// const random = document.querySelector('.random')
// random.innerHTML = `<h4> Hello </h4>`

// const container = document.querySelector('.container')


// const createElement = (element) => {
//     const newEl = document.createElement(element)
//     return newEl
// }





// // Создаем новый элемент <ul>
// const newP = document.createElement('ul');

// // Находим элемент контейнера
// const container = document.querySelector('.container');

// // Добавляем HTML после контейнера
// container.insertAdjacentHTML('afterend', '<div>hello</div>');

// // Выводим новый элемент в консоль
// console.log(newP);





// const arr1 = [
//     {
//         id: 1,
//         title: 'Hello world',
//         description: 'description'
//     },
//     {
//         id: 2,
//         title: 'Hello world2',
//         description: 'description'
//     },
//     {
//         id: 3,
//         title: 'Hello world3',
//         description: 'description'
//     },
// ]
// for (let i = 0; i < arr1.length; i++) {
//     const li = createElement('li')
//     const title = createElement('h3')
//     const description = createElement('p')
//     const strong = createElement('strong')
//     title.innerText = arr[i].description
//     strong.innerText = `id of this el is: ${arr[i].id}`

//     li.append(title, description, strong)
//     newLst.append

// }
// container.append(newList)

function removeElement() {
    const myElement = document.getElementById('myElement');
    if (myElement) {
        myElement.remove();
    }
}



// const newArr = ['first title', 'second title', 'third title'];
        
//         // Находим элемент ul
//         const newList = document.querySelector('ul');
        
//         // Проходим по каждому элементу массива и добавляем его в список
//         for (let i = 0; i < newArr.length; i++) {
//             const li = document.createElement('li');
//             li.innerText = newArr[i];
//             newList.appendChild(li);
//         }

















































































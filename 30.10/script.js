// console.log(window);
// function getCurrentData() {
//     const date = new Date()
//     const year = date.getFullYear()
//     //padstart - кладет в начало строки какое то определенное кол во символов работает со строкой только и в качестве аргумента принимает максимальную величину строки, какой она должна стать, а вторым аругументом - символ в начало
//     const month = String(date.getMonth() + 1).padStart('2', 0)
//     const day = String(date.getDate()).padStart('2', 0)
//     return `сегодня: ${day}-${month}-${year}`
// }
// console.log(getCurrentData())

const btn = document.querySelector('#btn')

const html = document.querySelector('html')
const theme = localStorage.getItem('theme')

// Добавить значение инпута в Локал сторадж, вывести на страницу значение из локального хранилища и при обновлении чтоб сохранялось значение. Так же добавить кнопку по клику на которую будем убирать из локального хранилища и страницы данное значение
const input = document.querySelector('#input');
const displayBtn = document.querySelector('.displayLoginName');
const clearBtn1 = document.querySelector('.clearBtn1');
const outputContainer = document.querySelector('#outputContainer');

// Получение значения из LocalStorage и вывод на страницу
//  LocalStorage — это коробка для хранения данных. Мы берем ключ 'storedValue' и ищем, есть ли у нас уже сохраненное значение в этой коробке.
const storedValue = localStorage.getItem('storedValue');
// Проверяем, нашли ли мы что-то в коробке. Если да, то...
if (storedValue) {
    // Берем найденное значение и показываем его на странице, вставляя в специальное место (контейнер).
    outputContainer.innerText = storedValue;
}

// Сохранение значения из инпута в LocalStorage и вывод на страницу
// Когда пользователь нажимает на кнопку "Сохранить", срабатывает функция, которая внутри этих фигурных скобок.
displayBtn.addEventListener('click', () => {
    // Берем текст, который пользователь ввел в поле для ввода (инпут).
    const value = input.value;
    // Кладем этот текст в коробку LocalStorage и называем его ключом 'storedValue'.
    localStorage.setItem('storedValue', value);
    // Сразу показываем этот текст на странице в контейнере для вывода.
    outputContainer.innerText = value;
});

// Очистка LocalStorage и удаления значения со страницы
clearBtn1.addEventListener('click', () => {
    localStorage.removeItem('storedValue');
    outputContainer.innerText = '';
    input.value = '';
});





console.log(theme);

if (theme) {
    html.setAttribute('data-theme', theme)
}

btn.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) {
        if (currentTheme === 'light') {
            localStorage.setItem('theme', 'dark')
            html.setAttribute('data-theme', 'dark')
        } else {
            localStorage.setItem('theme', 'light')
            html.setAttribute('data-theme', 'light')
        }
    } else {
        localStorage.setItem('theme', 'dark')
        html.setAttribute('data-theme', 'dark')
    }
})



const container = document.querySelector('.container');
const btnContainer = document.querySelector('.btn-container');
const clearBtn = document.querySelector('.clear-btn')

const myName = localStorage.getItem('myName');
if (myName) {
    container.innerText = myName;
}

btnContainer.addEventListener('click', () => {
    localStorage.setItem('myName', 'Karina');
    const myName = localStorage.getItem('myName');
    if (myName) {
        container.innerText = myName;
    }
})

clearBtn.addEventListener('click', () => {
    container.innerText = '';
    localStorage.removeItem('myName');
})



const obj = {
    a: 5,
    b: 7
}
// ЛХ - локальное хранилище
//локальное хранилище принимает только строки в качестве значени
//JSON.stringify - превращение объекта в строку так как ЛХ принимает только строки
localStorage.setItem('keyObj', JSON.stringify(obj))
const storedObj = localStorage.getItem('keyObj')
//JSON.parse - превращает обратно из строки в объект
const parsedObj = JSON.parse(storedObj)
console.log(parsedObj);



const arr = [
    {
        id: 1,
        title: 'hello',
        description: 'hello desc'
    },
    {
        id: 2,
        title: 'hello2',
        description: 'hello desc2'
    },
    {
        id: 3,
        title: 'hello3',
        description: 'hello desc3'
    }
]
// Сериализация массива и сохранение в LocalStorage:
localStorage.setItem('myArr', JSON.stringify(arr))
const storedArr = localStorage.getItem('myArr')
const parsedArr = JSON.parse(storedArr)
console.log(parsedArr);


const formObj = {
    username: 'username',
    email: 'email'
}

const form = document.querySelector('.form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = e.target['username'].value
    const email = e.target['email'].value
    console.log({
        userName: username,
        email: email
    });

    console.log(e);
    console.log(userName, email);
    const date = {username: username, email: email}
    console.log(date);
    localStorage.setItem('dataObj'. JSON.stringify(date))
    const pUsername = document.createElement('p')
    const pEmail = document.createElement('p')
    const storedObj = JSON.parse(localStorage.getItem('dataObj'))
    pUsername.innerText = storedObj.userName
    pEmail.innerText =  storedObj.email
    form.insertAdjacentElement('afterend', pUsername)
    form.insertAdjacentElement( 'afterend', pEmail)
    

})



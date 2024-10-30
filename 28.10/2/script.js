// localStorage.setItem('username', 'yury1997')
// localStorage.setItem('username2', 'yury19972')
// localStorage.setItem('username3', 'yury19973')
// const username = localStorage.getItem('username')
// localStorage.removeItem('username')
// localStorage.clear()

// const h3 = document.querySelector('.h3')
// const btn = document.querySelector('.btn')


// btn.addEventListener('click', () => {
//     h3.textContent = username
// })
// Необходимо добавить в локальное хранилище свои имя и фамилию и вывести их на страницу
// Установить данные в локальное хранилище с помощью setItem
// Получить и передать на страницу с помощью getItem
// Устанавливаем данные в локальное хранилище
// Устанавливаем данные в локальное хранилище
localStorage.setItem('firstName', 'Alina');
localStorage.setItem('lastName', 'Kvitka');

// Получаем данные из локального хранилища
const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');

// Находим элемент на странице и выводим данные
const h3 = document.querySelector('.h3');
h3.textContent = `${firstName} ${lastName}`;

const form = document.que('#form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const target = e.target['input'].value
    localStorage.setItem('inputValue', target)
})

btn.addEventListener('click', () => {
    const value = localStorage.getItem('inputValue')
    console.log(value);
    
    document.querySelector('p').textContent = value
})

// 2. Создать форму с полем ввода. При отправке формы значение поля ввода должно сохраняться в localStorage.


// 4. Добавить кнопку, которая очищает localStorage.
// Создадим кнопку, которая переключает значение localStorage из 1 в 0 и обратно.
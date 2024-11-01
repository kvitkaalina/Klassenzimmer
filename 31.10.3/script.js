// const btn = document.querySelector('.btn')
// const container = document.querySelector('.container')
// const title = document.createElement('h3')
// const username = localStorage.getItem('username')
// if(username) {
//     createElement(title, username)
// }
// btn.addEventListener('click', () => {
//     localStorage.setItem('username', 'yury1997')
//     const username = localStorage.getItem('username')
//     container.innerHTML = ''
//     createElement(title, username)
// })
// function createElement(el, value) {
//     el.innerText = value
//     container.append(el)
// }



// Создайте простое приложение для сохранения списка задач. Пользователь должен иметь возможность добавлять и удалять задачи. Список задач должен сохраняться в localStorage.



const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = e.target["username"].value;
  const email = e.target["email"].value;
  const data = { username: username, email: email };
  console.log(data);
  // console.log(username, email);
  localStorage.setItem("dataObj", JSON.stringify(data));
  const pUsername = document.createElement('p');
  const pEmail = document.createElement('p');
  const storedObj = JSON.parse(localStorage.getItem('dataObj'));
  pUsername.innerText = storedObj.username;
  pEmail.innerText = storedObj.email;
  form.insertAdjacentElement('afterend', pUsername);
  form.insertAdjacentElement('afterend', pEmail);
});

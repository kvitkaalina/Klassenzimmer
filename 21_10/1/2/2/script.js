const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const form = document.querySelector('.form')
const mainInput = document.querySelector('#main__input')
btn.addEventListener('click', (event)=> {
    console.log(event);
})

container.addEventListener('click', (event) => {
    console.log(event);
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target[1]);
})


mainInput.addEventListener('input', (e) => {
    console.log(e.target.value);
})


                





  



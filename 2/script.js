//part1
// const str = "Hello"
// console.log (str.split('').reverse().join(''))
//  const myName = "Alina"
//  const myLastName = "Kvitka"
//  const age = 29
// const combineInfo = `Hello, my name is ${myName + ' ' + myLastName} my age is ${age} my favorit phrase is "gfhjfk"`
// console.log(combineInfo);


//  const num = 10
//  const num2 = 15
//  const num3 = num2*num / 2
//  console.log(typeof {num3});

//  + - плюс
//  - минус
//  * - умножить
//  / - делить
//  % - кратность
// const even = 3 % 2 === 0
// console.log(even);




//  const arr = [1, 2, 3, 4, "hello", "result", "alina"]
// !==-строгое нет 
// != не

// if(5 !=='5') {
//     console.log ('Все равно')
// } else {
//     console.log('Не равно')
// }

// && - логическое и
// ||- логическое или

// if(5 !='5' && 5 !== '5') {
//     console.log ('Все равно')
// } else {
//     console.log('Не равно')
// }

//  const a = 5
//  const b = 10
//  const c = b * a / 2  

//  if(a > b && a < c) {
//     console.log('Все получилось');
//  }else {
//     console.log('Не вышло');
// }

// тернарный оператор
// a > b && a < c ? console.log ('Все получилось') : console.log ('Не вышло')


const a = 6000
 if(a >= 1000 && a < 5000 ){
    console.log('скидка 5%');
} else if ( a >=5000 && a < 10000){
    console.log('скидка 10%');
} else if ( a >=10000 && a < 100000){
    console.log('скидка 15%');
} else {
    console.log('Скидки нет');
}

const aa = 4

if (aa % 2 ==0) {
    console.log ('da')
} else {
    console.log('net');   
}

aa % 2 ==0 ? console.log ('da') : console.log('net');  

// console.log(aa % 2);


if (login == 'admin') {
    console.log('Привет админ')
} else if (login == 'user') {
    console.log('Привет,пользователь')
} else {
    console.log ('Привет, гость')
}

const inputValue = 'hello world'
//  с помощью lenght мы определяем длинну например, стороки, массива

if(inputValue.length < 8){
    console.log('Пароль должен содержать больше 8 символов')
} else {
    console.log('its ok')
}



    



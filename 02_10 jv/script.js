//Типы данных
//1. string 'Yello world'
//2. number 44
//3.boolean true || false
//4.Object-масив = {}
//5.undefined -oтсутствует значение
//6.null - отсутствие присутствие

// console.log(4)
// console.log('My name Alina')

//VARIABLES a.k.a переменные
//переменные -хранилище для информации в js


//константа
// const firstName = 'Alina'
// const lastName = 'Kvitka'
// const myAge = 27
// const myCity = 'Hamburg'


//я объявляю переменную и из за объявления через константу js ожидает сразу же присвоение значения этой перменной
// const result2
// const result2 = 'my result'

//let - можно переписать значение. Можно присвоить значение позже после объявления переменной
// let result

// result = 5
// result = 'string))))'
// result = 'string)))) new string('

// console.log(result);


//



//var
// console.log(myAge, myCity)
// var result3


// const myName = 'Alina'

// const j = 5
// const k = 10
// const c = j + k

// let counter = 0

// === - строгое равенство
// == - равенство
// = - присвоение
// if(5 == '5') {
//     //counter = counter + 1
//     counter++
// }

// const userName = 'Alina'
// const firstName = 5
// const secondNumber = 10
// const sum = firstName + secondNumber
// console.log(sum)


// const myName = 'Alina'
// const myLastName = 'Kvitka'
// const myAge = 29
// //конкатенация
// const result = 'Hello, world, my name is ' + myName + ' my age is ' + myAge + ' oh I forgot about my last name, which is ' + myLastName
// console.log(result);
// //интерполяция
// // синтаксис троится на косых кавычках и ${} - интеграции js внутрь строки
// const result2 = `Hello, world, my name is ${myName}, my last name is ${myLastName}, my age is ${myAge}`
// console.log(result2); 

// const timeWitoutTeacher = 20
// cons isLeft = true
//   //условный оператор делает проверку на истину
//   if(5==10)
//     console.log('correct')



// const a = 10
// const b = 20
// const c = a + b

// if(a > c){
//     console.log(`its more`)
// } else{
//     console.log(`its less`)
// }

// const a = 10
// const b = 15
// const c = a + b
// // === - строгое равенство
// == простое равенство
// = - присвоение
// !== - строгое не
// if(a !== '10') {
//     console.log('ok')
// } else {
//     console.log('error');
// }
// != - обычное не
// if(a != '10') {
//     console.log('ok')
// } else {
//     console.log('error');
// }
// && - логичекое И. Выдает true только в случае коогда оба операнда истины
// if(a > 5 && b < 10) {
//     console.log('ok')
// } else {
//     console.log('error');
// }
// console.log(true || false);
// || - логическое или
// if(a > 11 || b < 10) {
//     console.log('ok')
// } else {
//     console.log('error');
// }


const hour = 10
if (hour >=6 && hour <=11) {
    console.log("morning")
} else if (hour >=12 && hour <=17) {
console.log("good day")
} else if(hour >=18 && hour <=22) {
    console.log("evening")
} else  {
    console.log("good night")
}

const aGe = 19
if (aGe >18) {
    console.log("Доступ разрешен") 
} else {
    console.log("Доступ разрешен")
}


const grade = 2
if (grade ==1) {
    console.log('Отлично')
} else if (grade ==2) {
    console.log('Хорошо')
} else if (grade ==3) {
    console.log('Удолитворительно')
} else if (grade ==4) {
    console.log('Плохо')
}

const age = prompt("Подвердите свой возраст");

if (age < 12) {
   alert('Доступ запрещен! Вам должно быть больше 12 лет.');
} else if (age >= 12 && age < 18) {
   alert ('Доступ ограничен! Вы должны быть с родителями.')
} else if (age >= 18) {
    alert ('Добропожаловать')
}




 







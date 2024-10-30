// const a = 5
// const b = false
// const c = 10

// if(a < c && !b) {
//     console.log('Hello friend')
// }

// const a2 = 5
// const b2 = false
// const c2 = 10

// if(a2 < c2 && !b2) {
//     console.log('Hello friend')
// }


const obj = {
    kittyName: 'Persik',
    age: 48,
    color: 'orange white',
    habits: ['scratch a sofa', 'love to be pet', 'sleep on lags'],
    playful: false,
    bonus: 'morning alarm',
    paws: 4,
    passport: {
        id: 34234,
        address: {
            city: 'Munchen',
            country: 'Germany',
            street: 'Avenida Portgual 1288',
            ZIP: '04559-002'
        }
    },
    sayMeow: function () {
        console.log('MEOOOOOOOW')
    }
}

obj.sayMeow()

const obj2 = {
    kittyName: 'Persik',
    age: 48,
    color: 'orange white',
    habits: ['scratch a sofa', 'love to be pet2', 'sleep on lags'],
    playful: false,
    bonus: 'morning alarm',
    paws: 4,
    passport: {
        id: 34234,
        address: {
            city: 'Munchen',
            country: 'Germany',
            street: 'Avenida Portgual 1288',
            ZIP: '04559-002'
        }
    }
}

const obj3 = {
    kittyName: 'Persik',
    age: 48,
    color: 'orange white',
    habits: ['scratch a sofa', 'love to be pet3', 'sleep on lags'],
    playful: false,
    bonus: 'morning alarm',
    paws: 4,
    passport: {
        id: 34234,
        address: {
            city: 'Munchen',
            country: 'Germany',
            street: 'Avenida Portgual 1288',
            ZIP: '04559-002'
        }
    }
}
const obj4 = {
    kittyName: 'Persik',
    age: 48,
    color: 'orange white',
    habits: ['scratch a sofa', 'love to be pe4', 'sleep on lags'],
    playful: false,
    bonus: 'morning alarm',
    paws: 4,
    passport: {
        id: 34234,
        address: {
            city: 'Munchen',
            country: 'Germany',
            street: 'Avenida Portgual 1288',
            ZIP: '04559-002'
        }
    }
}
const obj5 = {
    kittyName: 'Persik',
    age: 48,
    color: 'orange white',
    habits: ['scratch a sofa', 'love to be pet5', 'sleep on lags'],
    playful: false,
    bonus: 'morning alarm',
    paws: 4,
    passport: {
        id: 34234,
        address: {
            city: 'Munchen',
            country: 'Germany',
            street: 'Avenida Portgual 1288',
            ZIP: '04559-002'
        }
    }
}

const habit = obj.habits[1]
const habit2 = obj2.habits[1]
const habit3 = obj3.habits[1]


// function greetings() {
//     console.log('hello, user')
// }

// greetings()
// параметры - описание вашей функции это то, что мы берем из головы
function kitten(kittenName, age, habits, color) {
    //функция должна всегда что - то возвращать
    return color
}


// реальные аргументы функции (то что пишется в скобочках при объявлении функции) передаются ИСКЛЮЧИТЕЛЬНО при вызове функции
kitten('Dynya', 36, ['scratch a sofa', 'love to be pet', 'sleep on lags'], 'brown')
kitten('Persik', 48, ['scratch a sofa', 'love to be pet', 'sleep on lags'], 'orange white')
const habitsOfCercei = ['scratch a sofa', 'love to be pet', 'sleep on lags']
kitten('Cercei', 2, habitsOfCercei, 'white')

function multiyply(a, b, c) {
    return a * b * c
}

console.log(multiyply(2, 2, 2));


//присваиваете в переменную result результат вызова функции multiply
const result = multiyply(2, 3, 4)

console.log(result);

if (result > 80) {
    console.log(multiyply(20, 5, 9))
} else {
    console.log(multiyply(9, 8, 7))
}

console.log(result + 100);



// 1. Объявление главной функции
function hello(callbackHi) {
    return callbackHi
}

// 2. сама функция что используется в качестве коллбека (функция обратного вызова)
function sayHello(string) {
    console.log(string);
}

hello(sayHello('hello world'))


function fn(a, a2, a3, a4, username) {
    // return [a, a2, a3, a4]
    return {
        1: a,
        2: a2,
        3: a3,
        4: a4,
        name: username
    }
}
const res = fn(3, 2, 56, 1, 'Yury')
console.log(res[3]);



// / function randomFN(arr, str) {
//     let count = 0
//     for(let i = 0; i < arr.length; i++) {
//         count += arr[i]
//     }

//     const splitStr = str.split('').reverse().join('')

//     return {
//         sum: count,
//         reverseString: splitStr
//     }

// }

// console.log(randomFN([1, 2, 3, 4], 'str'))



// 1. синтаксис
// 2. в стрелочной нельзя использовать ключевое слово arguments
// 3. стрелочная функция имеет доступ лишь  к глобальному контексту this ( тое есть window)
function fn(name) {
    return `Hello, ${name}`
}

const arrowFn = (name) => `Hello, ${name}`

console.log(fn('Yury'))
console.log(arrowFn('Yury2'))

// Создайте функцию `greet`, которая выводит в консоль приветствие "Привет, мир!".


function greet(greetings) {
    console.log(greetings);
}
// вызываем функцию
greet('Привет мир')

// Создайте функцию `square`, которая запрашивает у пользователя число, возводит его в квадрат и выводит результат.
function square(number) {
    console.log(number * number)
}
square(5);










// Напишите функцию `isEven`, которая запрашивает у пользователя число, проверяет его на четность и выводит результат в консоль.
function isEven(num) {
    if (num % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Чило нечетное');

    }
}
isEven(10)



// function sum(a, b) {
//     return a + b
// }
// console.log(sum(10, 20))


// Создайте функцию `concatenate`, которая запрашивает у пользователя две строки, объединяет их и выводит результат.

function concatenate(str1, str2) {
    console.log(str1 + str2);
}
concatenate('ja ', 'nein')



// Создайте объект person с двумя свойствами: name и age. Задайте им значения и выведите объект в консоль.
const person = {
    personName: 'Alina',
    age: 28
};
console.log(person);


// Напишите функцию multiply, которая принимает два числа в качестве аргументов и возвращает их произведение. Вызовите функцию и выведите результат в консоль.

function multiply(x, y) {
    console.log(x * y);
}
multiply((2), (3))

// Перепишите функцию multiply из предыдущей задачи с использованием стрелочной функции.
const multiply1 = (a, b) => a * b;
console.log(multiply1(3, 6));

//  Создайте объект calculator с методами add, subtract, multiply и divide, которые принимают два числа в качестве аргументов и выполняют соответствующую операцию. Выведите результаты операций в консоль.
// Add - сложение
// Subtract - вычитание
// Multiply - умножение
// Divide - деление

const calculator = {
    add: function (a, b) {
        return a + b;
    },

    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    }, 
    divide: function (a, b) {
        if( b != 0) {
        return a / b;
        } else {
            return 'Ошибка'
        }
    }, 

}

console.log(calculator.add(2, 2));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(5, 5));
console.log(calculator.divide(5, 0));

























































const arr = [1, 2, 3, 'hello world', 'how are u']

const poppedItem = arr.pop()
console.log(arr);

// Создайте массив animals с элементами "cat", "dog", "rabbit". Используйте метод pop(), чтобы удалить последний элемент массива.
// const animals = ["cat", "dog", "rabbit"];


const animals = ["cat", "dog", "rabbit"];
animals.pop(); // Удаляем последний элемент массива

console.log(animals); // Выводим обновленный массив


// Создайте массив letters с элементами "A", "B", "C". Используйте метод pop(), чтобы получить и вывести последнюю букву.
// const letters = ["A", "B", "C"];

const letters = ["A", "B", "C"];
const lastLetter = letters.pop(); // Удаляем и сохраняем последний элемент массива

console.log(lastLetter); // Выводим последнюю букву



const result = arr.filter((item, index, arr) => {
    return typeof item === 'number'
})

console.log(result);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 13, 235, 123, 6,]

const filterNums = numArr.filter(item => item > 5)
console.log(filterNums);

console.log(numArr);

const arrObj = [
    {
        id: 1,
        title: 'hello',
        description: 'hello world',
        completed: false
    },
    {
        id: 2,
        title: 'hello',
        description: 'hello world',
        completed: true
    },
    {
        id: 3,
        title: 'hello',
        description: 'hello world',
        completed: false
    },
    {
        id: 4,
        title: 'hello',
        description: 'hello world',
        completed: false
    },
    {
        id: 5,
        title: 'hello',
        description: 'hello world',
        completed: true
    },
    {
        id: 6,
        title: 'hello',
        description: 'hello world',
        completed: false
    },
    {
        id: 7,
        title: 'hello',
        description: 'hello world',
        completed: true
    },
    {
        id: 8,
        title: 'hello',
        description: 'hello world',
        completed: true
    }
]


const filterObjs = arrObj.filter((item) => {
    return item.completed === true
})

console.log(filterObjs);

// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только положительные числа из исходного массива.
// const numbers = [-2, 5, -8, 10, -3, 7];

const numbers = [-2, 5, -8, 10, -3, 7];
const positiveNums = numbers.filter(item => item > 0)
console.log(positiveNums);







// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа, которые делятся на 3 без остатка.
// const numbers = [9, 12, 5, 18, 7, 24];

const numbers1 = [9, 12, 5, 18, 7, 24];
const gutNums = numbers.filter(item => item % 3 == 0)
console.log(numbers1)


const arrObj1 = [
    {
        id: 1,
        title: 'hello',
        description: 'hello world',
        completed: false
    },
    {
        id: 2,
        title: 'hello',
        description: 'hello world',
        completed: true
    },
    {
        id: 3,
        title: 'hello',
        description: 'hello world',
        completed: false
    },
    {
        id: 4,
        title: 'hello',
        description: 'hello world',
        completed: false
    },
    {
        id: 5,
        title: 'hello',
        description: 'hello world',
        completed: true
    },
    {
        id: 6,
        title: 'hello',
        description: 'hello world',
        completed: false
    },
    {
        id: 7,
        title: 'hello',
        description: 'hello world',
        completed: true
    },
    {
        id: 8,
        title: 'hello',
        description: 'hello world',
        completed: true
    }
]
// Вывести только те объекты, чей id больше 4

const filterObjs1 = arrObj1.filter((item) => {
    return item.id > 4; // Фильтруем объекты, у которых id больше 4
});

console.log(filterObjs1); // Выводим отфильтрованные объекты




const randomNumArr = [4, 2, 8, 10, 23, 5, 8]

const orderArr = randomNumArr.sort((a, b) => a - b)
console.log(orderArr);


const randomLetters = ['g', 'b', 'c', 'a', 'k', 'l']
console.log(randomLetters.sort());
// Используя метод sort(), отсортируйте числовой массив по убыванию. 
// let array = [4, 2, 5, 1, 3];

let array = [4, 2, 5, 1, 3];
const orderArray = array.sort((a, b) => b - a)
console.log(orderArray);






// Используя метод sort(), отсортируйте массив объектов по значению определенного свойства
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 },
];


const agePeople = people.sort((a, b) => a.age - b.age)
console.log(agePeople);

const sortedByNameLength = people.sort((a, b) => a.name.length - b.name.length);
console.log(sortedByNameLength);


// Используя метод filter(), создайте новый массив, содержащий только четные числа из исходного массива.

// let array = [1, 2, 3, 4, 5];

let array3 = [1, 2, 3, 4, 5];
const newArray3 = array3.filter(items => items % 2 == 0)
console.log(newArray3);


//   Создайте массив строк. Напишите функцию, используя метод sort, чтобы отсортировать строки по их длине от самой короткой к самой длинной.
const words = ["apple", "banana", "kiwi", "orange", "grape"];
const langeWords = words.sort((a, b) => a.length - b.length)
console.log(langeWords);

// Создайте массив чисел. Напишите функцию, используя метод sort, чтобы отсортировать числа в порядке убывания.

const numbers3 = [10, 5, 8, 2, 7, 3];
const newNumbers3 = numbers3.sort((a, b) => b - a)
console.log(newNumbers3);


// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа в определенном диапазоне.

const numbers4 = [15, 7, 28, 3, 42, 10];
const minRange = 10;
const maxRange = 30;
// arr: Массив чисел, который мы передаем в функцию для фильтрации.
function fn(arr, min, max) {
    return arr.filter(item => item >= min && item <= max);
}

console.log(fn(numbers4, minRange, maxRange));

const randomNumArr6 = [4, 2, 8, 10, 23, 5, 8];

const res6 = randomNumArr6.sort((a, b) => a - b)
console.log(res6);

// for(let i = 0; i < randomNumArr.length; i++) {
//     console.log(randomNumArr[i]);
//     for(let j = 0; j < randomNumArr.length - i; j++) {
//         if(randomNumArr[j] < randomNumArr[j - 1]) {
//             let temp = randomNumArr[j]
//             randomNumArr[j] = randomNumArr[j - 1]
//             randomNumArr[j - 1] = temp
//         }
//     }
// }

// console.log(randomNumArr);

const res = randomNumArr6.shift()

console.log(res, randomNumArr6);


const newData = randomNumArr.unshift('hello string', 'hello world')
console.log(newData, randomNumArr);


// Создайте массив colors с элементами "red", "green", "blue". Используйте метод shift(), чтобы удалить первый элемент массива.
const colors = ["red", "green", "blue"];
const res1 = colors.shift()
console.log(res1, colors);




// Создайте массив fruits с элементами "banana", "orange". Используйте метод unshift(), чтобы добавить в начало массива новые фрукты: "apple", "grape".
const fruits = ["banana", "orange"];
const res2 = fruits.unshift("apple", "grape")
console.log(fruits, res2);

const res7 = randomNumArr6.reduce((prevValue, currentValue) => {
    return prevValue + currentValue
})

console.log(res7);

const randomStrArr = ['helloi', 'world', 'jjfffjd']


const resString = randomStrArr.reduce((prevValue, currentValue) => {
    return prevValue + " " + currentValue
})

console.log(resString);




const randomNumArr10 = [4, 2, 8, 10, 23, 5, 8];


const max = randomNumArr10.reduce((a, b) => Math.max(a, b))
console.log(max);

// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.
const numbers10 = [5, 10, 15, 20];
const sumNumbers = numbers10.reduce((a, b) => a + b)

console.log(sumNumbers);


// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.
const numbers12 = [5, 10, 15, 20];

function sumArray(arr) {
    return numbers12.reduce((accumulator, currentValue) => accumulator + currentValue);
}

const totalSum = sumArray(numbers12);

console.log(totalSum);



// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы найти максимальное число в массиве.
const numbers11 = [14, 5, 22, 8, 45, 11];
const maxNumbers11 = numbers11.reduce((a, b) => Math.max(a, b))
console.log(maxNumbers11);


const obj = {
    name: 'Yury',
    sayHi: function () {
        return `Hello, ${this.name}`
    },
}


console.log(obj.sayHi());

console.log();


const str = 'hello world'
// const newArr = Array.from(str)
console.log([...str]);

const randomNumArr23 = [4, 2, 8, 10, 23, 5, 8];
const newNum = Math.pow(randomNumArr23[2], 2)
console.log(newNum);


// const brandNewArr = Array.from(randomNumArr23, (item) => item > 10)
// console.log(brandNewArr);

// console.log(randomNumArr23);



// Используя методы filter() и reduce(), вычислите сумму всех четных чисел в числовом массиве.
let numericArray = [1, 2, 3, 4, 5];
const newnumericArray = numericArray
    .filter(items => items % 2 == 0)
    .reduce((a, b) => a + b)
console.log(newnumericArray);

// randomNumArr
//     .filter((item) => item)
//     .map(item => item)
//     .reduce(item => item)


// Используя метод from(), создайте новый массив из строки, содержащий только уникальные символы.
let str1 = "hello";
// Метод Array.from() преобразует множество в массив.
// Множество (Set) — это коллекция уникальных значений. Здесь str1 преобразуется в множество, удаляя дублирующиеся значения.
const formattedArr = Array.from(new Set(str1))
console.log(formattedArr);



// Используя методы map(), sort() и reduce(), вычислите сумму квадратов всех положительных чисел в числовом массиве, отсортировать массив по возрастанию, последовательно используя filter() map() и reduce().
let numericArray3 = [-2, 3, -5, 1, 4];
const newnumericArray3 = numericArray3
    .filter(item => item > 0) // Фильтруем только положительные числа... Не изменяет:Метод filter не изменяет исходный массив, а возвращает новый массив с отобранными элементами.
    .map(item => item * item) // Возводим их в квадрат .....метод  не изменяет исходный массив. Он создает новый массив с преобразованными элементами.
    .sort((a, b) => a - b)    // Сортируем по возрастанию..... изменяет порядок элементов в исходном массиве.
    .reduce((a, b) => a + b,); // Вычисляем сумму квадратов.....не изменяет исходный массив. Он сворачивает массив в одно значение (например, сумму).
console.log(newnumericArray3);


// У вас есть массив объектов, каждый объект представляет продукт с его ценой и количеством на складе. Необходимо выполнить следующие действия:
// Используя map(), создать новый массив, содержащий стоимость каждого продукта (цена умноженная на количество).
// Используя filter(), получить только те продукты, у которых количество на складе больше 0.
// Используя reduce(), найти общую стоимость всех продуктов на складе.
const products = [
  { name: 'Product 1', price: 100, quantity: 2 },
  { name: 'Product 2', price: 50, quantity: 0 },
  { name: 'Product 3', price: 200, quantity: 1 },
  { name: 'Product 4', price: 30, quantity: 5 }
];

const formattedArr2 = products
    .map((item) => item.price * item.quantity)
    .filter((item) => item > 0)
    .reduce((a,b) => a + b )
    console.log(formattedArr2);
    






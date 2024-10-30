console.log('hello world');
// Создать массив из строк и чисел, вывести только строки, возведенные в верхний регистр

const mixArray = [20, 'banana', 30, 'cherry', 40];
const arrNew = mixArray
.filter(item => typeof item === 'string')
.map(item => item.toUpperCase());

console.log(arrNew);


console.log('hello');

// terminal
// npm init -y
// v json: "start": "node script.js"
// npm run start
// npm install nodemon -D
// v json: "dev": "nodemon script.js"
// npm run dev

const arr = ['string', 'hello', 'result4', 1, 2, 3, 4]
const arr2 = ['dhdjf', 'dhdjd', 'hdhfddj', 'shshdh']
// const result = arr
// .filter(item => typeof item === 'string' && item !== 'result')
// .map(item => item.toUpperCase())
// console.log(result);
//метод find возвращает первый искомый элемент. В отличае от метода filter что возвращает массив с элементами прошедшими проверку,
//  find возвращает только одно искомое значение
const findEl = arr.find(item => item % 2 === 0)
const findEl2 = arr.find(item => item.length > 4)
const someValue = arr.some(item => item % 2 === 0)
const someValue2= arr.some(item => item === 'result')
const areAllElemsTrue = arr2.every(item => item.length > 4)
// console.log(someValue, someValue2);
console.log(findEl, findEl2);


// Проверьте, содержит ли массив хотя бы одно отрицательное число с помощью метода some().
// let numbers = [1, 2, -3, 4, 5];
// А так же с помощью метода find верните значение больше 4

let numbers = [1, 2, -3, 4, 5];
const minNumbers = numbers.some(item => item < 0)
console.log(minNumbers);

const largerThanFour = numbers.find(item => item > 4);
console.log(largerThanFour)


// Проверьте, являются ли все элементы массива положительными числами с помощью метода every().
let numbers4 = [1, 2, 3, 4, 5];
let positivNumbers = numbers4.every(item => item > 0)
console.log(positivNumbers);


// Проверьте, являются ли все элементы массива четными числами с помощью метода every().
let numbers5 = [2, 4, 6, 8, 10];
let newNumbers = numbers5.every(item => item % 2 === 0)
console.log(newNumbers);

// Проверьте, содержит ли массив хотя бы одну строку длиной более 10 символов с помощью метода some().

let strings = ["apple", "banana", "orange", "watermelon"];
let newString = strings.some(item => item.length > 10);
console.log(newString);




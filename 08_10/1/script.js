let grade =  prompt('Введите количество балов')

if(grade >= 90 ) {
    console.log('A');   
} else if(grade >= 80 ){ 
    console.log('B');
} else if(grade >= 70){
    console.log('C');
} else if(grade >= 60){
    console.log('D');
} else {
    console.log('F'); 
}

console.log('probel');

let dayOFWeek = 1

switch (dayOFWeek) {
    case 1:
        console.log('Понедельник');
        break
        case 2:
        console.log('Вторник');
        break
        case 3:
        console.log('Среда');
        break
        case 4:
        console.log('Четверг');
        break
        case 5:
        console.log('Пятница');
        break
        case 6:
        console.log('Суббота');
        break
        case 7:
        console.log('Воскресение');
        break
        default:
            console.log('Неверное значение');
}
2 - eусловие

for (let i = 1; i <= 25; i++) {
    console.log(i);
}

const arr = ['hello', 12, true, { myName: 'Alina' }, [12, 34, 9, 4, 6]]
console.log(arr);

const objArr = [
    {
        id: 0,
        titlte: 'title',
        description: 'description'
    },
    {
        id: 2,
        titlte: 'title',
        description: 'description'
    },
    {
        id: 334232423,
        titlte: 'title',
        description: 'description'
    },
    {
        id: 4,
        titlte: 'title',
        description: 'description'
    }

]
console.log(objArr[3]);


// НЕ ВНИКАЕМ. Получение данных в формате массив объктов с сервера
// async function fetchApi() {
//     try {

//         const response = await fetch('https://jsonplaceholder.typicode.com/comments')
//         const data = await response.json() 
//         console.log(data);

//     } catch(e) {
//         throw new Error('Request has fallen') 
//     }
// }

fetchApi()

// Способы объявления массива
1. С помощью литеральной нотации a.k.a руками
const arrResult = [1, 2, 3, 4, 5]
2. С помощью оператора new + метода Array()
const newArr = new Array(10).fill('hello')
console.log(newArr);

const str = 'hello world'
const obj = {
    myName: 'Yury',
    myLastName: "Arakelov",
    age: 27
}

const resultObj = Object.entries(obj).map(item => ({key: item[0], value: item[1]}))
console.log(resultObj);


console.log([...str].map(item => item.toUpperCase()).join(''))

const str = 'hello world'
const obj = {
    myName: 'Yury',
    myLastName: "Arakelov",
    age: 27
}

console.log(str.split('').reverse().join(''))

console.log(str.split('').reverse().join(''))
const fruitsArr = ['apple', 'kiwi', 'orange', 'mango', 'jabuticaba']
// по средине Всегда округляйте, когда делите неизвестное кол - во на рандомное число, например, при поиске середины массива.
const mid = Math.floor(fruitsArr.length / 2)
console.log(fruitsArr[mid]);

console.log(fruitsArr[4])
//последний елемент
console.log(fruitsArr[fruitsArr.length - 1])


const colorsArr = ['red', 'blue', 'white']
console.log(colorsArr);


const numbers = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

const numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++)
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);

}

let sum = 0
const numbers3 = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers3.length; i++) {
    sum += numbers3[i];
}
console.log(sum);

// Вывести числа от 1 до 5, прервать цикл, если текущее число равно 3.

// Вывести числа от 1 до 5, пропустить вывод числа 3 с использованием continue. помоги решить задачу

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

let y = 0
while (y <= 5) {
    y++

    if (y === 3) {
        break;
    }
    console.log(y);
    
}

Вывести только нечетные числа от 1 до 6, используя continue.

 for (let i = 1; i <=6; i++) {
    if( i % 2 == 0 ){
        continue  
    }
    console.log(i);
    }


    let y = 0;
    while (y <= 6) {
        y++

        if( y % 2 ===0 ) {
            continue 

        }
        console.log(y);
        
    }
    // Вывести числа от 1 до 10, прервать цикл, если текущее число больше 7.

    for (let i = 1; i <=10; i++) {
        if (i > 7){
            break
        }
        console.log(i);
    }
    

   



















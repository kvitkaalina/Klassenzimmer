// const arr = [1, 2, 3, 4, 5]
//добавляет все элементы указаные в качестве аргумета ьетодаpush в конец исходного массива
// arr.push ('hello world', 'tff')
//  console.log(arr);
//доставляет последний элимент исходного массива
// const newEl = arr.pop()
// доставляет первый элимент исходного массива
// const newEl2 = arr.shift


// console.log(newEl, newEl2);
// const newArr = ['hello', 1234, 325, 234, 'world']
// let temp;
// temp = newArr[newArr.length -1]
// newArr[newArr.length - 1] = newArr[0]
// newArr[0] = temp
// console.log(newArr);

// Поменять первый и последний элемент
 
// const newArr = ['hello', 1234, 325, 234, 'world'];:

// Создаём массив newArr с элементами: 'hello', 1234, 325, 234, 'world'.

// let temp;:

// Объявляем переменную temp, в которую будем временно сохранять значение одного из элементов массива.

// temp = newArr[newArr.length - 1];:

// newArr.length - 1 вычисляет индекс последнего элемента массива (в данном случае это 4, так как в массиве 5 элементов).

// temp получает значение последнего элемента массива, то есть 'world'.

// newArr[newArr.length - 1] = newArr[0];:

// Присваиваем последнему элементу массива ('world') значение первого элемента массива ('hello').

// Теперь последний элемент массива становится 'hello'.

// newArr[0] = temp;:

// Присваиваем первому элементу массива значение, сохранённое в temp (которое равно 'world').

// Теперь первый элемент массива становится 'world'.

// console.log(newArr);:
//    const helloFn = (a, b, callback) => {
//     return `${a} + ${b} = ${callback}`
//    }


//    const callbackFn = (callback2) => {
//     return callback2

//    }


// const result = resArr.map((item) => {
//     if(typeof item === 'string') {
//      return [...item].reverse().join('')
//     } else if(typeof item === 'number') {
//         return item ** 2
//     }
// })
// console.log(result);
// console.log(resArr);
// const array = [1, 2, 3, 4, 5];
// const squareArray = array.map((item) => {
//     return item * item;
// })
// console.log(squareArray);

// Используя метод map(), создайте новый массив, содержащий длины каждого элемента исходного массива.

const resArr = ['hjjjj', 'jjjhhhjj', 1, 2, 3, 4, 5]
const mapArr = resArr.map((item) => {
   if(typeof item === 'string' ) {
    return item.length 

   } else  {
    return  'это число'
   }
}
)
console.log(mapArr)




const number = [1, 1, 3, 4, 5]
const squerArr = number.map ((item) => {
    return item * item 

     }
    )
    console.log(squerArr);
    
    // Создайте массив чисел. Используя метод forEach и условие, выведите в консоль только четные числа из массива.
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    numbers.forEach((value) => {
        if( value % 2 == 0)
            console.log(value);
            

    }
)
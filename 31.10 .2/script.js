// console.log(('Начало выполнение'));


// setTimeout(function () {
//     console.log('Задача А завершена');
    
// },2000)

// console.log('Продолжаем с задачей В');



//   console.log(1);
//   console.log(2);
//   setTimeout(() => console.log(3), 1000)
//   console.log(4);
//   console.log(5);



//   const firstPromise = new Promise((res, rej) => {
//       res('djjdkdkdkkdd');

//   })
//   console.log(firstPromise);


//   firstPromise((res) => {
//     console.log(res);
    
//   })
  
  
  const a = 5
  const b = 10
  function promiseFn(x, y) {
      return new Promise((res, rej) => {
          if(x > y) {
              res(')))) yes)))))')
          } else {
              rej('x can not be more than y')
          }
      })
  }
  
  promiseFn(a, b)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(()=> {
        console.log('Ну это все)')
    })


   function random (a,b) {
    return new Promise((res, rej) => {
        if(a.length > b) {
            res('good') 

            
        } else {
            rej ('no')
        }
    })

   }
   random('hello', 7) 
   .then((result) => console.log(result)) 
   .catch((error) => console.log(error)) 
   .finally(() => console.log('Это конец'));
   
//    Создайте функцию checkEvenNumber, которая принимает число в качестве аргумента и возвращает Promise. Если число четное, выполните resolve с сообщением "Число четное", в противном случае выполните reject с сообщением "Число нечетное".
// %
function checkEvenNumber(a) { 
    return new Promise((res, rej) => { 
        if (a % 2 === 0) { 
            res('Число четное'); 

        } else { 
            rej('Число не четное'); 
        } 
    })
}
    checkEvenNumber(4)
     .then((result) => console.log(result)) 
     .catch((error) => console.log(error)) 
     .finally(() => console.log('Проверка завершена'))


     function checkEvenNumber(a) {}

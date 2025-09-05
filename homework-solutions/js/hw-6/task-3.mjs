/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/

let unique;
const Arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];

for (const elem of Arr){
  if (Arr.indexOf(elem)!==Arr.lastIndexOf(elem)){
    Arr.splice(Arr.lastIndexOf(elem), 1)
  }
}

unique=[].concat(Arr)
console.log(unique)

export { unique };

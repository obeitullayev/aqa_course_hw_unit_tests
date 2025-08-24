/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/

function countOccurrences(arr) {
  const obj={};
  arr.map(el => {
    if(!(el in obj)){
      obj[el]=0
      arr.filter(el2 =>
      el2===el?obj[el]+=1:0)
    }
  })

  return obj
}

export { countOccurrences };

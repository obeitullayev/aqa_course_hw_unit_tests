/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...Array) {
  const sumArr=[]
  for (let i =0; i<Array.length; i++){
    sumArr.push(...Array[i])
  }
  return sumArr
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const words = sentence.split(' ')
  let neWord= []

  for (const word of words){
    if (word!==''){
      if (word===words[0] ){
        neWord.push(word[0].toLowerCase()+word.slice(1).toLowerCase())
      }
      else
        neWord.push(word[0].toUpperCase()+word.slice(1).toLowerCase())
    }
  }

  let alls = neWord.join('_')
  return alls
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
//   */
function fibonacci(n) {

  if (n===1 || n===0) return n
  else { return (fibonacci(n-1))+(fibonacci(n-2))}
}


export { mergeArrays, fibonacci, devideBy };

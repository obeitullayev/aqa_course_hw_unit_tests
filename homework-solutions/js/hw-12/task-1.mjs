// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

// 1.
const delayTwoSeconds = (callback) =>{ 
    setTimeout(() => {console.log(callback())}, 2000)} 

const call=()=> {
    return 'return callback'
}

delayTwoSeconds(call)

// 2.
const prom_res = new Promise((res, rej)=>{res('1')}).then((res)=> {console.log(res)})
// 3.
const prom_rej = new Promise((res, rej)=>{rej('Promise failed')}).catch((rej)=> {console.log(rej)})
// 4.
const promiseNumber=(num)=>{return new Promise((res, rej)=>{res(num)})}
promiseNumber(1).then(res=>{console.log(res)})
// 5.
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((result)=>{result.map(res => {console.log(res)})})

// 6.
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((result)=>{result.map(res => {console.log(res)})})

// 7.
const arr=[1, 2, 3]

async function promiseAll(arr) {
    const array = arr.map(res=>promiseNumber(res))
    const result = await Promise.all(array)
    console.log(result)
    }

promiseAll(arr) 

async function promiseAllSettled(arr) {
    const array = arr.map(res=>promiseNumber(res))
    const result = await Promise.allSettled(array)
    console.log(result)
    }

promiseAllSettled(arr) 
// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5].map, callback) => [0,2,6,12,20]

type map<A, U> = (el: A, index:number, array: A[]) => U;

let arr =[1,2,3,4,5];

function mappper<A, U>(array:A[], callback: map<A, U> ): U[] {
    const res: U[]=[];
    for (let i=0; i<array.length; i++) {
        res.push(callback(array[i], i, array));
    }
    return res
}

console.log(mappper(arr, (index, element)=> element*index))

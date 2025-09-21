
// 1. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.
    function wrapInArray<T>(anyType:T): T[] {
      return [anyType]
    }

    const numberArray = wrapInArray(5); // [5]
    const stringArray = wrapInArray('Hello'); // ['Hello']
        console.log(numberArray)
        console.log(stringArray)

// 2. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).

    function getLastItem<T>(arrElements:T[]) {
      return arrElements.at(-1)
    }

    console.log(getLastItem([1, 2, 3, 4])); // 4
    console.log(getLastItem(['a', 'b', 'c'])); // 'c'


// 3. Создайте дженерик интерфейс IPair, который принимает два типа T и U и содержит поля first: T и second: U. 
//    Реализуйте функцию, принимающую IPair и возвращающую строку, описывающую пару.

    interface IPair<T, U> {
      first: T;
      second: U;
    }

    function describePair<T, U> (propert:IPair<T, U> ): string {
      return `${propert.first} and ${propert.second}`
    }

    console.log(describePair({ first: 'Alice', second: [1,2,3] })); // "Alice and 30"

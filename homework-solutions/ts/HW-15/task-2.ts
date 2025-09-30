// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

const user = {
  name: "Alex",
  age: 25,
}

function getKeyByValue<T extends object>(obj: T, value: T[keyof T]): keyof T|undefined {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
}

console.log(getKeyByValue(user, 25)) 
// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee

interface IEmployee {
    name: string, 
    salary: number, 
    isManager: boolean 
}

const QA: IEmployee = {
    name:'as',
    salary:1,
    isManager:true,
}

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)

type EmployeeKeys = keyof IEmployee 

const ds: EmployeeKeys='isManager'

function getEmployeeValue(employee: IEmployee, key: EmployeeKeys) {
  return employee[key];
}
console.log(getEmployeeValue(QA, 'name'))

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
type QaKeys =  keyof typeof QA
const qa_keys: QaKeys = "name"

// 4. Создайте тип UserType из объекта QA (используйте typeof)
type UserType = typeof QA

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными

type NotRequired   = Partial< IEmployee>
const partial_obj: NotRequired= {}

// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee

type Set = Pick<IEmployee, "name" | "salary">
const only_needed:Set= {
    name:'s',
    salary:1
}

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager

type Set2 = Omit<IEmployee, "isManager">
const only_needed2:Set2= {
    name:'s',
    salary:1
}

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)

type Set3 = Readonly<IEmployee>
const only_needed3:Set3= {
    name:'s',
    salary:1,
    isManager:true
}

// 9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)

const Set4: Record<string, QaKeys> = {
    '1':'name',
    '2':'salary',
    '3':'isManager'
}

// Необходимо создать классовую структуру
// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

interface IVehicle{
    getDetails(): string,
    start(): string
}



// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

abstract class Vehicle implements IVehicle {

    constructor(public make: string, public model: string) {
    }

    start(): string {
        return  `The vehicle ${this.make} ${this.model} is starting.`
    };

    abstract getDetails():string

}


// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".

class Car extends Vehicle{
    constructor(public make:string, public model:string, public year: number) {
        super(make, model)
    }

    getDetails(): string{
        return `make: ${this.make}, model: ${this.model}, year: ${this.year}`
    }

}

// 4. Создайте объект класса Car и проверьте работоспособность

const tesla = new Car("Tesla", "X", 2020)
console.log(tesla.start())
console.log(tesla.getDetails())

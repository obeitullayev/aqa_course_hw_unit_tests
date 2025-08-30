class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  // Геттеры
  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get profession() {
    return this._profession;
  }

  get salary() {
    return this.#salary;
  }

  // Сеттеры
  set firstName(name) {
    this._firstName = name;
  }

  set lastName(name) {
    this._lastName = name;
  }

  set profession(value) {
    this._profession = value;
  }

  set salary(value) {
    if (value < 0) {throw Error()}
    this.#salary = value;
  }

  getFullName(){
    return `${this._firstName} ${this._lastName}`
  }
}


class Company {
  #employees=[];

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees;
  }

  // Геттеры
  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  set title(value) {
    return this._title=value;
  }

  set phone(value) {
    return this._phone=value;
  }

  set address(value) {
    return this._address=value;
  }

  addEmployee(employee) {
    if (employee instanceof Employee){
      this.#employees.push(employee)
    }
    else {throw new Error('Not employee')}
  }

  getEmployees(){
    return this.#employees
  }

  getInfo(){
  return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.getEmployees().length}`

  }
}

export { Employee, Company };


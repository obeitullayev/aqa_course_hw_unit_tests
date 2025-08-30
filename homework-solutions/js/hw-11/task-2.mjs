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
    if ( name.length <= 1 || name.length > 50 || !/^[A-Za-zА-Яа-яЁё\s-]+$/.test(name) ) {throw new Error()}
    this._firstName = name;
  }

  set lastName(name) {
    if ( name.length <= 1 || name.length > 50 || !/^[A-Za-zА-Яа-яЁё\s-]+$/.test(name)) {throw new Error()}
    this._lastName = name;
  }

  set profession(value) {
    if ( value.length < 1 || !/^[A-Za-z](?:[A-Za-z\s-]*[A-Za-z])?$/.test(value)) {throw new Error()}
    this._profession = value;
  }

  set salary(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0 || value >= 10000) {throw new Error()}
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

  findEmployeeByName(firstName){
    let name = this.#employees.find(el => el.firstName===firstName) 
    if (name) return name
    else throw new Error() 
    }

  removeEmployee(firstName){
  let index= this.#getEmployeeIndex(firstName) 
  if (index>=0)
    {return this.#employees.splice(index, 1)}
  else throw new Error()
  }

  #getEmployeeIndex(firstName){
    let empIndex = this.#employees.findIndex(el =>  el.firstName===firstName)
    return empIndex
    }

  getTotalSalary(){
    let empSalary = this.#employees.reduce((acc, el) => acc+el.salary, 0)
    return empSalary
  }
}


export { Employee, Company };

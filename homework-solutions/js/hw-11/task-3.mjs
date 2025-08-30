class Employee {
  #salary;

  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  // Геттеры
  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
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

  set salary(value) {
    this.#salary = value;
  }

  getFullName(){
    return `${this._firstName} ${this._lastName}`
  }
}

class Developer extends Employee {

  constructor(firstName, lastName, salary, programmingLanguages= []) {
    super(firstName, lastName, salary);
    this.programmingLanguages=programmingLanguages;
  }

  addProgrammingLanguage(language){
    if (language.length <= 1 || language.length > 50 || !/^[A-Za-zА-Яа-яЁё\s-]+$/.test(language)) {throw new Error()}
    this.programmingLanguages=language
  }
}

class Manager extends Employee {

  constructor(firstName, lastName, salary, teamSize=0) {
    super(firstName, lastName, salary);
    this.teamSize=teamSize;
  }

  increaseTeamSize(){
    this.teamSize++
  }
}

class Designer extends Employee {

  constructor(firstName, lastName, salary, designTools=[]) {
    super(firstName, lastName, salary);
    this.designTools=designTools;
  }

  addDesignTool(tool){
    if (tool.length <= 1 || tool.length > 50 || !/^[A-Za-zА-Яа-яЁё\s-]+$/.test(tool)) {throw new Error()}
    this.designTools=tool
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

  // Сеттеры
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
    if (employee instanceof Employee && !(this.#employees.find(el => el._firstName===employee.firstName && el._lastName===employee.lastName))){
      this.#employees.push(employee)
    }
    else {throw new Error('Not employee or already has')}
  }

  getEmployees(){
    return this.#employees
  }

  getEmployeesByProfession(profession){
    return this.#employees.filter(el => el.constructor.name===profession )
  }

}

export { Employee, Company, Designer, Developer, Manager };

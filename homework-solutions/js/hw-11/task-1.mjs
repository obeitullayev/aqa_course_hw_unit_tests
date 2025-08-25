class Employee {
  _salary=0;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  // Геттеры
  get firstName() {
    return this.fName;
  }

  get lastName() {
    return this.lName;
  }

  get profession() {
    return this.profes;
  }

  get salary() {
    return this._salary;
  }

  // Сеттеры
  set firstName(name) {
    this.fName = name;
  }

  set lastName(name) {
    this.lName = name;
  }

  set profession(value) {
    this.profes = value;
  }

  set salary(value) {
    if (value < 0) {throw Error()}
    this._salary = value;
  }

  getFullName(){
    let full = `${this.fName} ${this.lName}`
    return full
  }


}


class Company {
  _employees;

  constructor(title, phone, address, employees) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this._employees = [] ;
  }

  // Геттеры
  get gettitle() {
    return this.title;
  }

  get getphone() {
    return this.phone;
  }

  get getaddress() {
    return this.address;
  }

  addEmployee(employee) {
    if (employee instanceof Employee){
      this._employees.push(employee)
    }
    else {throw new Error()}
  }

  getEmployees(){
    return this._employees
  }

  getInfo(){
    `   
    Компания:
    Адрес:
    Количество сотрудников:`
  }
}

export { Employee, Company };

// ```js
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3000;
console.log(emp1.salary); // 3100
// ```
const company = new Company('Tech Corp', 123456, 'Main Street');
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); 

interface ICompany{
  addEnterprise(name: string): Enterprise;
  editEnterpriseName(id: number, newName: string): Enterprise| undefined ;
  deleteEnterprise(id: number): Enterprise[]|undefined;
  getAllEntAndDep(): string; 
  addDepToEnt(entId: number, depName: string, employees_count:number): Department|undefined;
  getEnterpriseByDepIdOrName(arg: number | string): Enterprise | undefined
}

class Company implements ICompany {
    enterprises: Enterprise[]=[]
    private id=0;

    addEnterprise(name: string): Enterprise {
      const ent = new Enterprise(this.generateId(), name);
      this.enterprises.push(ent);
      return ent;
    }

    editEnterpriseName(id:number, name:string):Enterprise | undefined {
     const res= this.enterprises.find((ent)=>
        ent.id===id)
      if (res) res.name=name; 
      return res
    }

    deleteEnterprise(id:number):Enterprise[]|undefined{
      const index = this.enterprises.findIndex((ent: Enterprise) => ent.id === id);
      if (index !== -1) {
          this.enterprises.splice(index, 1);
      }
      return this.enterprises
    }

    getAllEntAndDep():string{
      const getEmployeesCount = () =>{
      return this.enterprises.map((ent:Enterprise) => {
        return ent.departments.reduce((sum:number, dep:Department) => sum + dep.employees_count, 0);
      });}

      const formatter = (name:string, num:number, isDep=false) => {
        if (isDep) return `${name}, (${num>0?num:'Нет'} сотрудников)\n`
        else return `- ${name}, (${num>0?num:'Нет'} сотрудников)\n` }

      const dep_counter = () => {
        let counter=0;
        let result=''
        this.enterprises.map(
          (ent:Enterprise) => {
            const dataDep= getEmployeesCount();
            result+= formatter(ent.name, dataDep[counter], true)

            ent.departments.filter((dep:Department) =>
              {result+= formatter(dep.name, dep.employees_count)})
            counter++})
        return result}

      return dep_counter()
    }

    addDepToEnt(entId:number, name: string, employees_count:number):Department|undefined{
      const enterprise = this.enterprises.find(ent => ent.id === entId);
      if (!enterprise) return undefined;

      const dep = new Department(this.generateId(), name, employees_count);
      enterprise.departments.push(dep);
      return dep;
    }

    private generateId() {
      return  ++this.id;
    }

    getEnterpriseByDepIdOrName(arg: number | string): Enterprise | undefined {
      if (typeof arg === "number") {
        const byDepId = this.enterprises.find(ent =>
          ent.departments.some(dep => dep.id === arg)
        );
        if (byDepId) return byDepId;

        return this.enterprises.find(ent => ent.id === arg);
      } else {
        const byDepName = this.enterprises.find(ent =>
          ent.departments.some(dep => dep.name === arg)
        );
        if (byDepName) return byDepName;

        return this.enterprises.find(ent => ent.name === arg);
      }
    }
}

interface IEnterprise{
      id:number;
    name:string;
    departments: Department[];
    editDepName(id:number, name:string):Enterprise|undefined;
    delDep(id:number):Department|undefined;
    moveEmployeeBetweenDepInEnterprise(id_from:number, id_to:number):Department|undefined;
}

class Enterprise implements IEnterprise{
    private company= new Company

    constructor(
      public id: number,
      public name: string,
      public departments: Department[] = []
    ) {}

    editDepName(id: number, name: string): Enterprise | undefined {
      const dep = this.departments.find(dep => dep.id === id);
      dep?.editName(name);
      return this
    }

    delDep(id:number):Department|undefined{
      const index = this.departments.findIndex(dep => dep.id===id);
        if (index !== -1) {
           this.departments.splice(index, 1)
          return this.departments.find(dep => dep.id===id) ;
      }
    }

    moveEmployeeBetweenDepInEnterprise(id_from:number, id_to:number):Department|undefined{
      const from = this.departments.find(dep => dep.id === id_from)
      const to = this.departments.find(dep => dep.id === id_to)
      if (from && to) {to.employees_count+=from.employees_count
      from.employees_count=0}
      return to
    }
}

interface IDepartment{
    id:number;
    name:string;
    employees_count: number
}

class Department implements IDepartment{
    constructor(
      public id: number,
      public name: string,
      public employees_count: number)
      {}

    editName(newName: string) {
      this.name = newName;
  }
}

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).

// Пример:
// getEnterpriseName(4)
// getEnterpriseName("Отдел маркетинга")

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

const company = new Company
const ent1 = company.addEnterprise('Предприятие 1')
const ent2 = company.addEnterprise('Предприятие 2')
const ent3 = company.addEnterprise('Предприятие 3')
const dep1= company.addDepToEnt(1, 'Отдел тестирования', 2)
const dep2= company.addDepToEnt(1, 'Отдел маркетинга', 20)
const dep3= company.addDepToEnt(1, 'Администрация', 10)
const dep4= company.addDepToEnt(2, 'Отдел разработки', 10)
const dep5= company.addDepToEnt(2, 'Отдел маркетинга', 20)
const dep6= company.addDepToEnt(2, 'Отдел охраны труда', 20)
const dep7= company.addDepToEnt(3, 'Отдел аналитики', 0)
console.log(company.getAllEntAndDep())
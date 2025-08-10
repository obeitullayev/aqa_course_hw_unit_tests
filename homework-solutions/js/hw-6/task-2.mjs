/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив)
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:

*/

const resultUnique= [];
let resultNull=0;
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas =[myPizzasT1, myPizzasT2]
const lowerCompetitors =[]

for (const _ of competitorPizzas) lowerCompetitors.push(_.toLowerCase())

for (const _ of myPizzas) {
  for (const Pizza of _){
    const pizzaLower = Pizza.toLowerCase();
    if (lowerCompetitors.includes(pizzaLower)){
      resultNull++
      }
    else resultUnique.push(Pizza)
    }

  if (resultNull===_.length) resultNull = null
  else resultNull = 0

}

export { resultNull, resultUnique };

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
let resultNull;
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const lowerCompetitors =[]
const Unique= [];
const UniqueT2= [];

for (const _ of competitorPizzas) lowerCompetitors.push(_.toLowerCase())

for (const _ of myPizzasT1) {
    const pizzaLower = _.toLowerCase();
    if (!lowerCompetitors.includes(pizzaLower)){
      Unique.push(_)
      }
}
if (Unique.length>0)   {
  for (const _ of Unique) resultUnique.push(_)
}
else resultNull = null

for (const _ of myPizzasT2) {
    const pizzaLower = _.toLowerCase();
    if (!lowerCompetitors.includes(pizzaLower)){
      UniqueT2.push(_)
      }
}
if (UniqueT2.length>0)   {
  for (const _ of UniqueT2) resultUnique.push(_)
}
else resultNull = null

console.log(resultUnique, resultNull )
export { resultNull, resultUnique };

/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
const minAge=18;
const maxAge=60;


function if_else(age){
  age=+`${age}`

  if (age<minAge){
    console.log( `You don't have access cause your age is ${age}. It's less then ${minAge}.`)
  }
  else if(age>=minAge && age<maxAge){
    console.log( `Welcome ${age}!`)
  }
  else if(age>maxAge){
    console.log( `Keep calm and look Culture channel`)
  }
  else
    {console.log( `Incorrect data type`)}
};

if_else(true)
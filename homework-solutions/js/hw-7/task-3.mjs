/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
    let str = String(number)
    let sum=0;
    for (let i=0; i<str.length; i++){
      sum+=Number(str[i])
    }

    if (sum>9)
      {return digitalRoot(sum)}
    else
      {return sum}

}


export { digitalRoot };

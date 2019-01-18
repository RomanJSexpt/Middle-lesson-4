/* 1. Создайте функцию, возвращающую слово «ворона» в правильной форме
 в зависимости от переданого числа n.
 Например: На ветке сидит 1 ворона; На ветке сидит 4 вороны; На ветке сидит 26 ворон. */

let string = " ворона";
const firstStr = "На ветке сидит "
let n = 1;


function correctForm(param) {
    if (param === 1) {
        return  firstStr + param + string;
    }
    if (param > 1 && param <= 4) {
        return firstStr + param + " вороны";
    }
    if (param > 4 && param <= 20){
        return firstStr + param + " ворон"
    }

}
correctForm(n)

// игра работает до n <= 20. Вопрос .Какое нужно создать условие ??? чтоб сработало например 22 ?


function crow(n) {
    let plural = 
      (n%10==1 && n%100!=11 
          ? 0 
          : n%10>=2 && n%10<=4 
        && (n%100<10 || n%100>=20) 
          ? 1 
          : 2
      );
  
    if (plural === 2) {
      return `${n} ворон`;
    } else if (plural === 0){
      return `${n} ворона`;
    } else if (plural === 1) {
      return `${n} вороны`;
    }
  }







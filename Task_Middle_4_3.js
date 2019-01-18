/*3. Напишите функцию, определяющую, является ли данный год високосным по григорианскому календарю.
 Функция должна принимать число и выводить true если год является високосным и 
 false если не високосным. Функция должна содержать проверку полученного аргумента на число,
  если полученный аргумент не число, выполнять преобразование к числу,
 иначе выводить сообщение об ошибке.
Математическую формулу можно вывести прочитав статью на википедии
Можете воспользоваться заготовкой */
'use strict';

function isLeapYear(param) {
    if (isNaN(param) === true) {
        return "Error - year is not found"
    }



    if (param % 400 === 0) {
        return true;
    }
    if (param % 100 === 0) {
        return false
    }
    if (param % 4 === 0) {
        return true
    } else {
        return false
    }
}
isLeapYear()

//console.log(isLeapYear(1600));  //true
//console.log(isLeapYear(2100));  //false
console.log(isLeapYear(2012)); //true
//console.log(isLeapYear());    //Error - year is not found
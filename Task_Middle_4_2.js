/*2. Напишите функцию, которая принимает строку и выполняет следующее преобразование:
если принимаемая строка больше или равна 15 символов,
 то остаток строки обрезается и вставляется символ … (троеточие).
 Для решения этой задачи используйте строковый метод String.substring(). */


 const str = "Lorem ipsum, dolor sit amet consectetur adipisicing."

 function transform(param){
     return param.substring(0,15) + "...";
 }
 transform(str)

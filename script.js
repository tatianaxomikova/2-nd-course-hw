// let a = 10;
// alert (a);
// a = 20;
// alert (a);

// let ageIphone = "Год выпуска первого iPhone 2007.";
// alert (ageIphone);

// let nameСreator = "Создатель языка JavaScript Брендан Айком.";
// alert (nameСreator);

// let b = 10;
// let c = 2;
// let result = b+c;
// alert (result);

// let b = 10;
// let c = 2;
// let result = b-c;
// alert (result);

// let b = 10;
// let c = 2;
// let result = b*c;
// alert (result);

// let b = 10;
// let c = 2;
// let result = b/c;
// alert (result);

// let b = 10;
// let c = 2;
// let result = b-c;
// alert (result);

// let a = 2;
// let b = 5;
// let result = a ** b;
// alert (result);

// let a = 9;
// let b = 2;
// let result = a% b;
// alert (result);

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num = ++num;
// num = --num;
// alert(num);

// let age = prompt("Сколько вам лет?");
// alert(age);

// const user = {
//     name: "Mickey",
//     age: 14,
//     isAdmin: false,
// }
// user["city of residence"] = "Paris";
// user.age = 20;
// delete user["city of residence"];
// let info = prompt("Какую информацию хотите узнать о пользователе?","name","age","isAdmi");
// alert( user[info] );

// let firstName = prompt('Напишите Ваше имя!',);
// alert(`Привет ${firstName}!`);

// let password = String('пароль');

// let userPassword = prompt("Введите пароль")

// if (userPassword === password) {
//     console.log("Пароль введен верно");
// } else {
//     console.log("Пароль введен неправильно");
// }

// let c = -3;

// if (c > 0 &&  c < 10 ) {
//     console.log ("Верно");
// } else {
//     console.log ("Неверно");
// }

// let d = 15;
// let e = 0;

// if (d > 100 || e > 100) { 
//     console.log ("Верно")
// } else {
//     console.log ("Неверно")
// }

// let a = '2';
// let b = '3';

// let result = Number(a) + Number(b);
// alert(result);

// let monthNumber = Number(prompt('Введите номер месяца!'));

// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         console.log('Зимний месяц')
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Весенний месяц')
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Летний месяц')
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Осенний месяц')
//         break;
//     default:
//         console.log('Введите, пожалуйста число от 1-12')
//         break;
// }

// let count = 0;
// while (count < 2) { 
// 		console.log("Привет!"); 
// 	    count++; 
// }

// let i=1;
// while (i <6) {
//     console.log(i);
//     i++;
// }

// let count = 7;
// do {
//     console.log(count);
//     count++
// } while (count < 23);

// let name = {
//     'Коля': "200",
//     'Вася': "300",
//     'Петя': "400",
// };
// for (let obj in name) {
//     alert(`${obj} - зарплата ${obj[obj]} долларов`);
// }

// let n = 1000;
// while (true) {
//     n/=2;
//     console.log(n);
//     if (n <= 50){
//         break;
//     }
// }
// let num = 5;
// 
// for (let fri = 6; fri <=31; fri+=7) {
//     console.log(`Сегодня пятница, ${fri}-е число. Необходимо подготовить отчет.`); 
// }
// ДЗ 5 задание 1
// function nambers(a,b) {
//     if (a >= b) {
//         return(b)
//     } 
// }
// let result = nambers(6,6);
// let result1 = nambers(8,4);
// console.log (result);
// console.log (result1);
//задание 2

// function parity (number) {
//     let userNumber = prompt (number);
//     if (userNumber % 2 == 0) {
//         console.log ("Число четное");
//     } else {
//         console.log ("Число нечетное");
//     }
// }

// parity ("Введите число:");

// задание 3.1

// function square(num) {
// 	console.log(num ** 2);
// }
// let result = square(3);

// ЗАДАНИЕ 3.2

// function foursquare(num) {
// 	return num ** 2;
// }
// let result = foursquare(3);
// console.log(result);

// задание 4

// function years (number) {
//     if (number < 0) {
//         console.log ("Вы ввели неправильное значение");
//     } else if ( number <= 12) {
//         console.log ("Привет, друг!");
//     } else {
//         console.log ("Добро пожаловать!");
//     }
// }
// let userAge = prompt ("Сколько Вам лет?");
// years (userAge);

// задание 5

// const creation = (a, b) => {
//     if (isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом'; 
//     } else {
//         return a * b;
//     }
//     };
// const result = creation(5,6);
// const result2 = creation('Число', 1);
// console.log(result,result2)

// Вариант 2
// const creation = (a, b) => {
//     if (isNaN(a) || isNaN(b)) return 'Одно или оба значения не являются числом'; 
//     return a * b;
//     };
// const result = creation(5,6);
// const result2 = creation('Число', 1);
// console.log(result,result2)

// Задание 6

// const cubeNumber = () => {
//     let userInput = Number(prompt('Введите число:'));

//     if (isNaN(userInput)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         let result = userInput ** 3;
//         return `${userInput} в кубе равняется ${result}`;
//     }
// };

// console.log(cubeNumber());

// задание 7.

// function yardage() {
//     return 3.14*this.radius**2;
// }
// function perimeter() {
//     return 2*this.radius*3.14;
// }
//     const circle1 = {
//         radius: 5,

//         getArea: yardage,
//         getPerimeter: perimeter,
// };

//     const circle2 = {
//         radius:6,

//         getArea: yardage,
//         getPerimeter: perimeter,
//     };

// console.log(circle1. getArea());
// console.log(circle1. getPerimeter());
// console.log(circle2. getArea());
// console.log(circle2. getPerimeter());

const monthNumber = () => {
    let userNumberMonth = Number(prompt('Введите номер месяца!'));

    if (12 && 1 && 2) {
        return('Зима')   
    } else if (3 || 4 || 5) {
        return('Весна')   
    } else if (6 || 7 || 8) {
        return('Лето')   
    } else if (9 || 10 || 11) {
        return('Осень')   
    } else {
        return('Введите, пожалуйста число от 1-12')
    }
}

console.log(monthNumber());
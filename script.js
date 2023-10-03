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

for (let fri = 6; fri <=31; fri+=7) {
    console.log(`Сегодня пятница, ${fri}-е число. Необходимо подготовить отчет.`); 
}
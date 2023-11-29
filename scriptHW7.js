// let str = 'js';
// let uppercaseStr = str.toUpperCase();
// console.log(uppercaseStr);


// function searchStart(arr, target) {
//     return arr.filter(item => item.toLowerCase().startsWith(target.toLowerCase()));
//   }
  
//   console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); // Output: ['Кошка', 'Комар']
//   console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // Output: ['груша']
//   console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // Output: []
  

// Math.floor(32.58884);
// Math.ceil(32.58884);
// Math.round(32.58884);


// let numbers = [52, 53, 49, 77, 21, 32];
// let minNumber = Math.min(...numbers);
// let maxNumber = Math.max(...numbers);
// console.log("Наименьшее число: " + minNumber);
// console.log("Наибольшее число: " + maxNumber);


// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }

// console.log(getRandomInt(1, 10));


// function getRandomArrNumbers(num) {
//    const length = Math.floor(num / 2);
//    const randomArray = [];
//    for (let i = 0; i < length; i++) {
//      randomArray.push(Math.floor(Math.random() * (num + 1)));
//    }
//    return randomArray;
//   }
  
// console.log(getRandomArrNumbers(7)); 
// console.log(getRandomArrNumbers(12)); 
  

// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
// console.log(getRandomInteger(1, 10)); 


// let currentDate = new Date();
// console.log(currentDate);


// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);

  
// function formatDate(date) {
//     const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
//     const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  
//     const day = date.getDate();
//     const month = months[date.getMonth()];
//     const year = date.getFullYear();
//     const dayOfWeek = daysOfWeek[date.getDay()];
//     const timeStr = date.toLocaleTimeString();
  
//     return `Дата: ${day} ${month} ${year} - это ${dayOfWeek}. Время: ${timeStr}`;
//   }
  
//   let currentDate = new Date();
//   console.log(formatDate(currentDate));


function fillInTheWords() {
let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruits.sort(() => Math.random() - 0.5);
alert(fruits);
let firstFruit = prompt("Чему равнялся первый элемент массива?");
let lastFruit = prompt("Чему равнялся последний элемент массива?");

if (firstFruit === fruits[0] && lastFruit === fruits[fruits.length - 1]) {
  alert("Поздравляю! Вы угадали оба элемента!");
} else if (firstFruit === fruits[0] || lastFruit === fruits[fruits.length - 1]) {
  alert("Вы были близки к победе!");
} else {
  alert("К сожалению, вы ответили неверно.");
}
}
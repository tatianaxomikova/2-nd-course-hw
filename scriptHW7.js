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


function getRandomArrNumbers(num) {
    const length = Math.floor(num / 2);
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.floor(Math.random() * (num + 1)));
    }
    return randomArray;
  }
  
  console.log(getRandomArrNumbers(7)); 
  console.log(getRandomArrNumbers(12)); 
  


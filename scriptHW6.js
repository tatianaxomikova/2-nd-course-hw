// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//     if (numbs [i] >= 10) break;
//     console.log(numbs[i]);
// }

// const numbers = [1, 5, 4, 10, 0, 3];
// const i = numbers.indexOf(4)
// console.log(i)

// let union = [1, 3, 5, 10, 20];
// union = union.join(' ');
// console.log(union);

// const array = [];
// for(let i = 1; i <= 3; i++) {
//   array.push([]);
// }

// const numRows=3;
// const numCols = 3;
// const value = 1;
// const multliArray = [];
// for(let i = 0; i < numRows; i++) {
//     const row = [];
//     for (let j = 0; j < numCols; j++) {
//         row.push(value);
//     }
//     multliArray.push(row);
//   }
// console.log (multliArray);

// const one = [1, 1, 1];
// one.push(2, 2, 2);
// console.log (one);

// const numbers = [9, 8, 7, 'a', 6, 5];
// numbers.sort();
// numbers.pop();
// console.log(numbers);

// const numb = [9, 8, 7, 6, 5];
// let userNum = Number(prompt('Угадай число!'));
// if (numb.includes(userNum)) {
//     alert ('Угадал!');
// } else {
//     alert ('Не угадал!');
// }

//  let alphabet = 'abcdef';
//  let arrayAlpha = alphabet.split('');
//  arrayAlpha = arrayAlpha.reverse();
//  arrayAlpha = arrayAlpha.join('');
//  console.log(arrayAlpha);

// let numbs = [[1, 2, 3,],[4, 5, 6]];
// let flatten = [];
// for (let arr of numbs) {
//     for (let num of arr) {
//          flatten.push(num);
//     }
// }
// console.log(flatten);

const sum = [2,5,6,1,9,];
for (let i = 0; i < sum.length-1; i++) {
    const currentElement = sum[i];
    const nextElement = sum[i+1];
    const amount = currentElement + nextElement;
    console.log(amount);
}
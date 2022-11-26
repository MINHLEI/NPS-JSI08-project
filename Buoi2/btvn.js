const arr1 = [1, 2, 3, 5];
const arr2 = [...arr1];
const arr3 = arr1;
console.log(arr2);
console.log(arr3);

const arrA = ['Hello','Xin chào'];
const arrB = ['Bonjour','Olá'];
const waysToSayHello = [...arrA, ...arrB];
const waysToSayHello2 = [arrA, arrB];
console.log(waysToSayHello);
console.log(waysToSayHello2);

const arrX =  [0, 1, 2, 3, 4, 5, 6, 7, 8];
// Dùng arr map

// const arrSquare = arrX.map((item, index, array) => {
//     return item * item;
// });

const arrSquare = arrX.map(item => item*item);
console.log(arrSquare);
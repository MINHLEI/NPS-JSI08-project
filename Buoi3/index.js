// Array reduce

// Tính tổng các phần tử trong mảng sau
const numbers = [1, 2, 3, 4, 5];

// Cách 1: Dùng for
// let sum = 0;
// for (let i = 0; i <= numbers.length - 1; i = i + 1) {
//     sum += numbers[i];
// }
// console.log(sum);

// Cách 2: Dùng reduce
let sumWithReduce = numbers.reduce(function (carry, element) {
  return carry + element;
}, 0);
console.log(sumWithReduce);

// , 0 ở cuối là giá trị khởi tạo cho carry, carry sẽ dùng giá trị này làm giá trị khởi điểm để bắt đầu tính toán
// element: giá trị phần tử hiện tại trong mảng
// sau khi tính toán giá trị mới sẽ được carry mang theo

// đi vào phần tử "đầu tiên": carry = 0, element = 1; => carry = carry + element = 0 + 1 = 1
// đi vào phần tử thứ 2: carry = 1, element = 2; => carry = carry + element = 1 + 2 = 3

// Split và join

// Split: Dùng để chuyển từ chuỗi thành mảng
const numberInString = "1, 2, 3, 4, 5";
const numberFromString = numberInString.split(","); // Dùng với string không phải array
console.log(numberFromString);

// Join: Dùng để chuyển một mảng thành chuỗi
const stringFromNumber = numbers.join(", ");
console.log(stringFromNumber);

// Array includes: Kiểm tra xem 1 phần tử có tồn tại trong array ko

// Kiểm tra xem số 3 có trong mảng ko
const isInNumber = numbers.includes(3);
console.log(isInNumber);

const isNotInNumber = numbers.includes(6);
console.log(isNotInNumber);

// Bài tập
// Bài 1
arr1 = [1, 2, 4, 5, 6];
arr2 = [1, 6, 8, 9, 0];

const arrFiltered = arr1.filter((item) => {
  if (arr2.includes(item) == true) {
    return true;
  } else {
    return false;
  }
});

console.log(arrFiltered);

// Cách rút gọn
filteredArr1 = arr1.filter((item) => arr2.includes(item));
console.log(filteredArr1);

// Bài 2
arr = [1, 54, 6, 7];
let newArr = arr.map(function (item) {
  return item + 5;
});
// Cách rút gọn hơn
// newArr = arr.map((item) => item + 5);
console.log(newArr);

// Bài 3
let m = [1, 2, 4, 5, 6, 7];
let n = [3, 5, 675, 8, 96];
const l = [1, 8, 10, 96, 7];

const mFiltered = m.filter(function (item) {
  if (l.includes(item) == true) {
    return false;
  } else {
    return true;
  }
});
console.log(mFiltered);

const nFiltered = n.filter(function (item) {
  if (l.includes(item) == true) {
    return false;
  } else {
    return true;
  }
});
console.log(nFiltered);

// Bài 4
const players = [
  { id: 11, name: "Messi", age: 33 },
  { id: 12, name: "Ronaldo", age: 34 },
  { id: 13, name: "Young", age: 35 },
  { id: 14, name: "Mane", age: 21 },
  { id: 15, name: "Salah", age: 24 },
];
// playersModified = {
//   11: {id: 11, name: "Messi", age: 33},
//   12: {id: 12, name: "Ronaldo", age: 34},
//   13: {id: 13, name: "Young", age: 35},
//   14: {id: 14, name: "Mane", age: 21},
//   15: {id: 15, name: "Salah", age: 24},
// }

// cách 1: forEach
// let playersModified = {};
// players.forEach(function (item) {
//   playersModified[item.id] = item;
// });
// console.log(playersModified);

// Cách 2: reduce
playersModified = players.reduce(function (carry, item) {
  carry[item.id] = item;
  return carry;
}, {});
console.log(playersModified)

let arr = [63, 49, 93, 38, 35, 19, 96, 12, 91];

let number = arr.filter(num => num % 2 != 0).reduce((a, b) => a + b, 0);
console.log("Tổng các số lẻ trong mảng:",number);
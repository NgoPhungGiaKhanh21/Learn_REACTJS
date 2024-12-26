alert("Nhập vào 1 dãy số s và 1 số n Mỗi số cách nhau bởi dấu ‘,’. -In ra dãy số mới gồm các phần tử có giá trị là bình phương của các số trong dãy s. -Tìm tất cả số trong dãy s có giá trị lớn hơn hoặc bằng n. -Tìm 1 số đầu tiên trong dãy s có giá trị bằng n.");
let s = prompt("Nhập dãy số s (cách nhau bằng dấu ',')");
let n = prompt("Nhập số n");
let arr =  s.split(',').map(Number);

console.log("In ra dãy số mới gồm các phần tử có giá trị là bình phương của các số trong dãy s");
let num1 = arr.map(num => num ** 2);
console.log(num1);

console.log("Tìm tất cả các số lớn hơn hoặc bằng n");
let num2 = arr.filter(num => num >= n);
console.log(num2);

console.log("Tìm số đầu tiên bằng n");
let num3 = arr.find(num => num == n);
console.log(num3);

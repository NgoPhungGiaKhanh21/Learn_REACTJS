let array = ['Apple', 'Orange', 'Kiwi', 'Cherry', 'Banana'];
let text = 'Cherry';

console.log("1. Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng");
let min = array.reduce((minStr, str) => str.length < minStr.length ? str : minStr);
console.log("Chuỗi có độ dài nhỏ nhất:", min);

console.log("2. Tìm những chuỗi trong mảng có chứa giá trị text");
let contain = array.filter(str => str.includes(text));
console.log("Các chuỗi chứa giá trị '" + text + "':", contain);  

console.log("3. Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s");
let newS = array.map(str => str.slice(0, 3));
console.log("Mảng mới với 3 ký tự đầu tiên:", newS);

console.log("4. Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’");
let string = array.join('-');
console.log("Chuỗi kết hợp các phần tử trong mảng:", string);
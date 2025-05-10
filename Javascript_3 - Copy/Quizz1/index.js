alert("Hãy khai báo 2 mảng. Mỗi mảng đều có 3 phần tử lần lượt là ‘a’, ‘b’, ‘c’. Cho biết kiểu dữ liệu của 2 mảng đó? -Sử dụng toán tử ‘+’ để ‘cộng’ 2 mảng đó và cho biết kết quả? -Sử dụng toán tử ‘==’ để so sánh 2 mảng đó và cho biết kết quả?");
let arr1 = ['a', 'b', 'c'];
let arr2 = ['a', 'b', 'c'];

console.log("Kiểu dữ liệu của 2 mảng này là Array");
console.log(Array.isArray(arr1)); //true
console.log(Array.isArray(arr2)); //true

console.log("Sử dụng toán tử cộng");
let arr3 = arr1 + arr2;
console.log(arr3); //a,b,ca,b,c

console.log("Sử dụng toán tử '==' để so sánh 2 mảng");
console.log(arr1.length == arr2.length); //true
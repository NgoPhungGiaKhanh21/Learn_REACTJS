alert("Khai báo 1 mảng gồm các số bất kỳ. -Hãy in ra các số chẵn trong mảng đó. -Hãy tính tổng các phần tử trong mảng. -Hãy tìm phần tử nhỏ nhất trong mảng.");
let arr = [54, 22, 24, 79, 95, 49];

//In ra các số chẵn trong mảng
let evenNumber = arr.filter(num => num % 2 == 0);
console.log(evenNumber); //[54, 22, 24];

//Tính tổng các phần tử trong mảng 
let sumArr = arr.reduce((sum, num) => sum + num, 0);
console.log(sumArr); //323

//Tìm phần tử nhỏ nhất
let min = Math.min(...arr);
console.log(min); //22
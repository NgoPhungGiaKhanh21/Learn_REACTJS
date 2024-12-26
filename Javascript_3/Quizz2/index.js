alert("Khai báo 1 mảng gồm 4 số bất kỳ khác nhau. -In ra phần tử có chỉ số 0 và 3 trong mảng. -Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2. -Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.");
let number = [67, 89, 44, 51];

//In ra phần tử có chỉ số 0 và 3 trong mảng
console.log(number[0]); //67
console.log(number[3]); //51

//Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2.
let sum = number[1] + number[2];
console.log(sum); //133

//Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
let temp = number[1];
number[1] = number[3];
number[3] = temp;
console.log(number);
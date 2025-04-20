console.log("0. Tính tổng các số từ 1 đến 50");
let sum1 = 0;
for(let i = 1; i <= 50; i++){
    sum1 += i;
}
console.log(sum1);

console.log("1. Tính tổng các số từ -10 đến 50");
let sum2 = 0;
for(let i = -10; i <= 50; i++){
    sum2 += i;
}
console.log(sum2);

console.log("2. In ra các số chia hết cho 9 trong đoạn [-100, 100]");
for(let i = -100; i <= 100; i++){
    if(i % 9 == 0){
        console.log(i);
    }
}

console.log("In ra dãy số từ 1 đến 200 bằng while");
let i = 1;
while(i <= 200){
    console.log(i);
    i++;
}

console.log("Thêm kí tự 'a' vào chuỗi s cho đến khi độ dài >= l");
let s = prompt("Nhập vào chuỗi s");
let l = parseInt(prompt("Nhập độ dài"));
while(s.length < l){
    s += 'a';
}
console.log("Chuỗi sau khi thêm kí tự 'a' là:",s);

console.log("Nhập 2 số 0 <= x < y <= 100");
let x = parseInt(prompt("Nhập vào số x (0 <= x < y <= 100):"));
let y = parseInt(prompt("Nhập vào số y (x < y <= 100):"));
while (x < y) {
    console.log(`x = ${x}, y = ${y}`);
    x++;
    y--;
}

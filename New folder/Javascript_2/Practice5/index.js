alert("Nhập 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x");
let a = parseInt(prompt("Nhập vào a:"));
let b = parseInt(prompt("Nhập vào b:"));
let x = parseInt(prompt("Nhập vào x:"));
let found = false;
for(let i = a; i <= b; i++){
    if(i % x == 0){
        alert(`Số nhỏ nhất trong khoảng [${a}, ${b}] chia hết cho ${x} là ${i}`);
        found = true;
        break;
    }
}
if(!found){
    alert(`Không có số nào trong khoảng [${a}, ${b}] chia hết cho ${x}`);
}
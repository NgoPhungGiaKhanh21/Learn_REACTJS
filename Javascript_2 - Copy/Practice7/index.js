alert("Nhập vào số n. Hãy in ra số ước của n.");
let n = parseInt(prompt("Nhập vào số n"));
let dem = 0;
let tinh = [];
for(let i = 1; i <= n; i++){
    if(n % i == 0){
        dem ++;
        tinh.push(i);
    }
}
alert(`Số ước của ${n} là ${dem}. Các ước là: ${tinh.join(", ")}`);

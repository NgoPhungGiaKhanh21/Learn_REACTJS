alert("Tính giai thừa số n");
let n = parseInt(prompt("Nhập số n"));
let number = 1;
for(let i = 1; i <= n; i++){
    number *= i;
}
alert(`Giai thừa của ${n} = ${number}`);
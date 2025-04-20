alert("Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: S = 1/(1.2) + 1/(2.3) + ... + 1/n(n+1)");
let n = parseInt(prompt("Nhập vào số n (n >= 2):"));
let sum = 0;
for(let i = 1; i <= n; i++){
    sum += 1 / (i * (i + 1));
}
alert(`Giá trị của S là ${sum}`);
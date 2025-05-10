alert("Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.");
let n = parseInt(prompt("Nhập vào số n (2 <= n <= 10)"));
if(n >= 2 && n <= 10){
    let number = "Bảng cửu chương của số " + n + ":\n";
    for(let i = 1; i <= 10; i++){
        number += n + "x" + i + "=" + (n * i) + "\n";
    }
    alert(number);
}else{
    alert("Số n phải nằm trong khoảng từ 2 đến 10.");
}
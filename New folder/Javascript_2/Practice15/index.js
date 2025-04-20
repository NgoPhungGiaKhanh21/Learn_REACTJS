alert("Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n. VD: n = 3");
let n = parseInt(prompt("Nhập vào số n (n >= 3):"));
if(n >= 3){
    let number = '';
    for(let i = 1; i <= n; i++){
        let row = '';
        for(let j = 0; j < i; j++){
            row += '*';
        }
        number += row.trim() + "\n";
    }
    alert(number);
}else{
    alert("Số n phải lớn hơn hoặc bằng 3.");
}

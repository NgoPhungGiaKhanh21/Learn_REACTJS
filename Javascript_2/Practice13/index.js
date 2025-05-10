alert("Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n. VD: n = 3");
let n = parseInt(prompt("Nhập vào số n (n >= 2):"));
if(n >= 2){
    let number = '';
    for(let i = 0; i < n; i++){
        let row = '';
        for(let j = 0; j < n; j++){
            row += '*';
        }
        number += row.trim() + "\n";
    }
    alert(number);
}else{
    alert("Số n phải lớn hơn hoặc bằng 2.");
}
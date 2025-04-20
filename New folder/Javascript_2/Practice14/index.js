alert("Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n. VD: m = 4, n = 3");
let m = parseInt(prompt("Nhập vào chiều rộng m (m >= 2):"));
let n = parseInt(prompt("Nhập vào chiều cao n (n >= 2):"));
if(m >= 2 && n >= 2){
    let number = '';

    for(let i = 0; i < n; i++){
        let row = '';
        for(let j = 0; j < m; j++){
            row += '*';
        }
        number += row.trim() + "\n";
    }
    alert(number);
}else{
    alert("Chiều rộng m và chiều cao n phải lớn hơn hoặc bằng 2.");
}
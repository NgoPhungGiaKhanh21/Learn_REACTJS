alert("Trò chơi đoán số: Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20. Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”. Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer. Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.");

let random = Math.floor(Math.random() * 20) + 1;  
let number = 0;  
let maxNumber = 5; 

// Vòng lặp đoán số
while (number < maxNumber) {
    let n = parseInt(prompt("Nhập vào số bạn đoán (từ 1 đến 20):")); 
    number++;  
    if(n < 1 || n > 20){
        alert("Vui lòng nhập một số hợp lệ từ 1 đến 20.");
        continue;
    }
    
    if (n === random) {  
        alert("Đoán đúng");
        break;
    } else {
        alert("Đoán sai");
        if (number < maxNumber) {
            alert("Còn lại " + (maxNumber - number) + " lượt đoán.");
        }
    }
}
if (number === maxNumber) {
    alert("Bạn đã thua cuộc");
}

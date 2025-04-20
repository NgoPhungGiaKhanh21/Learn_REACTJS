alert("Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.");
let n = parseInt(prompt("Nhập vào số n"));
let nguyento = true;
if(n <= 1){
    nguyento = false;
}else{
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            nguyento = false;
            break;
        }
    }
}
if(nguyento){
    alert(`${n} là số nguyên tố`);
}else{
    alert(`${n} không là số nguyên tố`);
}
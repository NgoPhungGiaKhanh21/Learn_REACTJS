alert("Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.");
let s = prompt("Nhập vào chuỗi s (chỉ gồm chữ số)");
let l = parseInt(prompt("Nhập vaò số l"));
while(s.length < l){
    s = '0' + s;
}
alert(`Chuỗi sau khi thêm kí tự '0' là ${s}`);
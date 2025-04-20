alert("Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất, bội chung nhỏ nhất của m, n.");
let m = parseInt(prompt("Nhập vào số m (m > 0):"));
let n = parseInt(prompt("Nhập vào số n (n > 0):"));
function ucln(a, b){
    while(b != 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function bcnn(a, b){
    return (a * b) / ucln(a, b);
}
let uclnValue = ucln(m, n);
let bcnnValue = bcnn(m, n);
alert(`Ước chung lớn nhất của ${m} và ${n} là ${uclnValue}`);
alert(`Bội chung nhỏ nhất của ${m} và ${n} là ${bcnnValue}`); 
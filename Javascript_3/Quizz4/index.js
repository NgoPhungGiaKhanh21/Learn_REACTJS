alert("Khai báo 1 mảng rỗng. Nhập vào số n (n > 0). Hãy điền n số có giá trị ngẫu nhiên vào trong mảng đó.");
let arr = [];
let n = prompt("Nhập vào số n (n > 0)");
for(let i = 0; i < n; i++){
    arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);
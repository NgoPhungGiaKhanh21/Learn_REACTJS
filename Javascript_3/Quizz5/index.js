alert("Khai báo 1 mảng gồm 2 phần tử. Nhập vào số n (n > 2). Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đấu khi độ dài của mảng bằng n.");
let arr = [1, 2];
let n = prompt("Nhập vào số n (n > 2)");

while (arr.length < n) {
    arr.unshift(0);
}
alert(arr);
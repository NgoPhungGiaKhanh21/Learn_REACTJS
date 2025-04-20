alert("Khai báo 1 mảng bất kỳ nhiều hơn 1 phần tử. Hãy thực hiện xóa phần tử cuối cùng trong mảng đến khi độ dài mảng bằng 1.");
let arr = [1, 2, 3, 4, 5];
while(arr.length > 1){
    arr.pop();
}
console.log(arr);
let number = [10, 8, 7, 11, 47, 15];

console.log("1. Tính tích các phần từ trong mảng");
let tich = number.reduce((a, b) => a * b, 1);
console.log("Tích các phần tử trong mảng:", tich);

console.log("2. Tìm số nhỏ nhất mà chia hết cho 2 trong mảng");
let minNum = Math.min(...number.filter(num => num % 2 == 0));
console.log("Số nhỏ nhất mà chia hết cho 2 trong mảng:", minNum);

console.log("3. Tìm số lớn nhất mà chia hết cho 3 trong mảng")
let maxNum = Math.max(...number.filter(num => num % 3 == 0));
console.log("Số lớn nhất mà chia hết cho 3 trong mảng:", maxNum);

console.log("4. Tính giá trị trung bình của mảng");
let avg = number.reduce((a, b) => a + b, 0) / number.length;
console.log("Giá trị trung bình của mảng:", avg);

console.log("5. Lọc ra các số nguyên tố trong mảng");
let nguyento = num => {
    if(num < 2) return false;
    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i == 0) return false;
    }
    return true;
}
let songuyento = number.filter(nguyento);
console.log("Các số nguyên tố trong mảng:", songuyento);

console.log("6. Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không");
let min10 = number.some(num => num < 10);
console.log("Có số nhỏ hơn 10:", min10);

console.log("7. Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không");
let max20 = number.every(num => num > 20);
console.log("Tất cả phần tử lớn hơn 20:",max20);

console.log("8. Nhập vào số n cho đến khi n là 1 số trong mảng s");
let n = parseInt(prompt("Nhập số n:"));
let test = number.includes(n);
console.log("Số nhập vaò có trong mảng:", test);

console.log("9. Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần");
let bubbleSort = arr => {
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};
let sort = bubbleSort([...number]);
console.log("Mảng sau khi sắp xếp theo Bubble Sort:",sort);
let d1 = [45, 41, 79, 80, 64, 16];
let d2 = [8, 58, 65, 35, 71, 49];

console.log("1. Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không");
let num1 = d1.every(num => d2.includes(num));
console.log("Tất cả các giá trị của d1 nằm trong d2:",num1);

console.log("2. Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không");
let sum = d1.reduce((a, b) => a + b, 0);
let num2 = d1.some(num => num % sum == 0);
console.log("Có phần tử nào trong d2 chia hết cho tổng của d1:",num2);

console.log("3. Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1");
let num3 = [...d2.filter(num => num % 2 == 0), ...d1.filter(num => num % 2 == 0)];
console.log("Mảng gồm các số có giá trị chia hết cho 2 lần lượt d2 và d1:",num3);

console.log("4. Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2");
let mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};
let merge = (left, right) => {
    let result = [];
    let i = 0, j = 0;
    while(i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i), right.slice(j));
};
let num4 = mergeSort([...d1, ...d2]);
console.log("Dãy số sau khi sắp xếp theo Merge Sort:",num4);
let growth = [
    [5,8,9,16],
    [2,7,1,9],
    [5,6,8,12],
    [10,2,1,8],
    [20,4,9,1]
];

console.log("1. Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (Tính trung bình theo hàng)");
let avg = growth.map(year => year.reduce((a, b) => a + b, 0) / year.length);
console.log("Trung bình tăng trưởng theo từng năm:",avg);

console.log("2. Tìm giá trị tăng trưởng trung bình theo năm lớn nhất");
let maxAvg = Math.max(...avg);
console.log("Giá trị tăng trưởng trung bình theo nam năm lớn nhất:",maxAvg);

console.log("3. Tìm giá trị tăng trưởng theo quý lớn nhất");
let max = Math.max(...growth.flat());
console.log("Giá trị tăng trưởng theo quý lớn nhất:",max);

console.log("4. Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột)");
let avgCol = [];
for(let i = 0; i < growth[0].length; i++){
    let avg1 = growth.reduce((a, b) => a + b[i], 0) / growth.length;
    avgCol.push(avg1);
}
console.log("Giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột):",avgCol);
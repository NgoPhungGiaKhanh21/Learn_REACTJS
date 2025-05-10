alert("Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả: Nếu BMI < 18.5 → in ra “Nhẹ cân” Nếu 18.5 <= BMI < 23 → in ra “Bình thường” Nếu 23 <= BMI < 25 → in ra “Thừa cân” Nếu BMI >= 25 → in ra “Béo phì”");
let w = parseFloat(prompt("Nhập chiều cao (m):"));
let h = parseFloat(prompt("Nhập cân nặng (kg):"));
let bmi = h / (w * w);
if (bmi < 18.5) {
    alert("Nhẹ cân");
} else if (bmi >= 18.5 && bmi < 23) {
    alert("Bình thường");
} else if (bmi >= 23 && bmi < 25) {
    alert("Thừa cân");
} else {
    alert("Béo phì");
}
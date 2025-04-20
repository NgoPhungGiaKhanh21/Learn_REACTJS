let a = 10, b = 20, c = 30, d = '40';

console.log('a + b + c =',a + b + c);
console.log("a - b / c =",a - b / c);
//20 / 30 = 0.6667 (chia ko lay du) -> 10 - 0.6667 = 9.333
console.log("a - (b * c) =",a - (b * c));
//nhân trước từ sau -> 10 - 600 = 590
console.log("d - (a * b) - c =",d - (a * b) - c);
//khi thực hiện phép tính trừ ko thể tính trừ giữa chuỗi và số nên chuỗi 40 sẽ chuyển thành số 40 -> 40 - 200 - 30 = -190
console.log("a + b + c + d =",a + b + c + d);
//do 40 là dạng chuỗi ko phải số và thực hiện phép tính cộng nên 40 ko đc tính vào -> (10 + 20 + 30) 40 = 6040
console.log("d + a - b + c =",d + a - b + c);
//do 40 là dạng chuỗi ko phải số và thực hiện phép tính cộng nên 40 ko đc tính vào -> 40 (10 - 20 + 30) = 4020
console.log("a - b + d - c =",a - b + d - c);
//đầu tiên 10 - 20 = -10 do thực hiện phép cộng và 40 là dạng chuỗi nên -10 + "40" = -1040 sau đó thực hiện phép tính trừ nên sẽ chuyển về số nên -1040 - 30 = -1070
console.log("d - c + a - b =",d - c + a - b);
//do thực hiện phép trừ nên 40 - 30 = 10 sau đó 10 + 10 - 20 = 0
console.log("a * b + d * c =",a * b + d * c);
//10 * 20 = 200 do phép nhân nên 40 thành số 40 * 30 = 1200 -> 200 + 1200 = 1400
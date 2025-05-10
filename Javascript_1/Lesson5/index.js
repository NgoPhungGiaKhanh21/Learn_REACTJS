let a = 1, b = '2', c = 3, d = '4';

console.log("b + d =",b + d);
//do b và d là dạnh chuỗi cùng với phép tính cộng -> '2' + '4' = 24
console.log("a + b + c + d =",a + b + c + d);
//do b và d là dạng chuỗi cùng với phép tính cộng -> 1 + '2' + 3 + '4' = 1234
console.log("a - b + c - d =",a - b + c - d);
//do đang thực hiện phép tính trừ nên b và d sẽ chuyển từ dạng chuỗi sang dạng số -> 1 - 2 + 3 - 4 = -2 
console.log("a - b - c + d =",a - b - c + d);
//do đang thực hiện phép tính trừ nên b sẽ chuyển từ dạng chuỗi sang dạng số -> 1 - 2 = -1 -> -1 - 3 + '4' = -44
console.log("(b + d) - (a + c) =",(b + d) - (a + c));
//do b và d là dạng chuỗi cùng với phép tính cộng nhung sau đó lại thực hiện phép tính trừ nên sẽ chuyển về dạng số -> ('2' + '4) - (1 + 3) -> 24 - 4 = 20
console.log("(a + b) - (c + d) =",(a + b) - (c + d));
//do b và d là dạng chuỗi cùng với phép tính cộng nhung sau đó lại thực hiện phép tính trừ nên sẽ chuyển về dạng số -> (1 + '2') - (3 + '4') -> 12 - 34 = -22
console.log("a * c + b * d =",a * c + b * d);
//do b và d là dạng chuỗi nhưng gặp phép tính nhân sẽ chuyển về dạng số -> 1 * 3 + '2' * '4' -> 3 + 8 = 11
console.log("-b + d =",-b + d); 
//do b và d là dạnh chuỗi cùng với phép tính cộng -> -'2' + '4' = -24
console.log("-b - d =",-b - d);
//do đang thực hiện phép tính trừ nên b và d sẽ chuyển từ dạng chuỗi sang dạng số -> -'2' - '4' = -6
console.log("-(b + d) =",-(b + d));
//do b và d là dạnh chuỗi cùng với phép tính cộng -> -('2' + '4') = -24
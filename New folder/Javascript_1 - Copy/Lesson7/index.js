let a = 11, b = '22', c = 33;

console.log("a + b =",a + b);
//do b là dạng chuỗi với phép tính cộng => 11 + '22' = 1122
console.log("a - c =",a -c);
//11 - 33 = -22
console.log("a + b + c =",a + b + c);
//do b là dạng chuỗi với phép tính cộng => 11 + '22' + 33 = 112233
console.log("a + c + b =",a + c + b);
//do b là dạng chuỗi với phép tính cộng => 11 + 33 = 44 => 44 + '22' = 4422
console.log("(a + b) % 3 =",(a + b) % 3);
//do % là chia lấy số dư => (11 + '22') % 3 => 1122 % 3 = 374 (ko có số dư)
console.log("a * b > 50 ->",a * b > 50);
//do b là dạng chuỗi nhưng có phép tính nhân nên chuyển về dạng số => 11 * 22 = 242 > 50 => true
console.log("a ** b > 100 ->",a ** b > 100);
//do b là dạng chuỗi nhưng có phép tính lũy thừa nên chuyển về dạng số => 11^22 (số rất lớn) > 100 => true
console.log("a - (b++) == 5 ->",a - (b++) == 5);
//do b++ nên b sẽ tự dạng chuỗi sang dạng số, gán b = 22 trước sau đó mới tăng b => 11 - 22 = -11 khác 5 => false
console.log("a - (++b) == 5 ->",a - (b++) == 5);
//do b++ nên b sẽ tự dạng chuỗi sang dạng số, tăng lên 23 sau đó gán b = 23 => 11 - 23 = -12 khác 5 => false
let name = 'AAA', age = 20, isGood = true;

console.log("age + 20 =",age + 20);
//age = 20 -> 20 + 10 = 30
console.log("age % 3 =",age % 3);
//% là chia lấy số dư nên 20 % 3 bằng 6 dư 2 (lấy số dư là 2)
console.log("name + ' BBB'=", name + ' BBB');
//cộng 2 chuỗi kí tự lại AAA BBB
console.log("!isGood =",!isGood);
//! là phủ định nên phủ định true thành false
console.log("name == 'aaa' && age >= 20 =",name == 'aaa' && age >= 20);
//name == 'aaa' ko đúng giá trị đc khai báo -> false, age >= 20 -> true từ đó false and true -> false
console.log("name!= 'aaa' && isGood =",name!= 'aaa' && isGood);
//vì name ko phải khai báo 'aaa' -> true từ đó true and true -> true
console.log("!(age < 10) && !isGood =",!(age < 10) && !isGood);
//vì age ko nhỏ hơn 10 -> true và phủ định của true -> false từ đó true and false -> false
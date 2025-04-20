let age = 25, isMarried = false, isRich = true;

console.log("age > 25 && isMarried && isRich ->",age > 25 && isMarried && isRich);
//do age > 25 ko đúng với khai báo -> false => false && false -> false => false && true -> false
console.log("(age <= 25 || isMarried) && isRich ->",(age <= 25 || isMarried) && isRich);
//(true or false -> true) => true and true -> true
console.log("(age > 10 || isRich) && isMarried ->",(age > 10 || isRich) && isMarried);
//(true or true -> true) => true and false -> false
console.log("!(age >=15 && isMarried) && isRich ->",!(age >=15 && isMarried) && isRich)
//phủ định của (true and false -> false) -> true => true and true -> true
console.log("!(age <= 20) || !(isMarried && isRich) ->",!(age <= 20) || !(isMarried && isRich));
//phủ định của false -> true và phủ định của (false and true -> false) -> true => true or true -> true
console.log("(age > 8 && !isMarried) || isRich ->",(age > 8 && !isMarried) || isRich);
//true and phủ định của false là true -> true => true or true -> true
console.log("!(age < 8 && !isMarried) || isRich ->",!(age < 8 && !isMarried) || isRich);
//phủ định của (false and  phủ định của false là true) -> false => false or true -> true
console.log("(age == 8 && isMarried) || !isRich ->",(age == 8 && isMarried) || !isRich);
//(false and false) -> false => false or phủ định của true là false => false or false -> false  
let x = true, y = false, z = 10;

console.log("x && y ->",x && y);
//true and false -> false
console.log("x && !y ->",x && !y);
//true and (phủ định false -> true) -> true
console.log("x && z == 10 ->",x && z == 10);
//true and true -> true
console.log("(x && z == 10) ->",(x && z == 10));
//true and true -> true
console.log("!(x && z == 10) ->",!(x && z == 10))
//phủ định (true and true -> true) -> false
console.log("!(x && z == 50) ->",!(x && z == 50));
//phủ định (true and false -> false) -> true
console.log("x && y && z == 10 ->",x && y && z == 10);
//true and false -> false => false and true -> false
console.log("x && !y && z == 10 ->",x && !y && z == 10);
//true and (phủ định false -> true) -> true => true and true -> true
console.log("x || y || z == 10 ->",x || y || z == 10);
//true or false -> true => true or true -> true
console.log("(x && y) || z != 10 ->",(x && y) || z != 10);
//true and false -> false => false or false (do z ko bằng 10) -> false
console.log("!(x && z == 10) || y ->",!(x && z == 10) || y);
//phủ định (true and true -> true) -> false => false or false -> false
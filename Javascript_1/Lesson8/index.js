let isTall = true, isMuscle = false, isHandsome = true;

console.log("isTall && isMuscle ->",isTall && isMuscle);
//true and false -> false
console.log("!isHandsome ->",!isHandsome);
//phủ định của true -> false
console.log("!isTall || !isMuscle ->",!isTall || !isMuscle);
//phủ định của true -> false, phủ định của false -> true => false or true -> true
console.log("isTall || !(isMuscle && isHandsome) ->",isTall || !(isMuscle && isHandsome));
//phủ định của (false and true -> false) -> true => true or true -> true
console.log("isMuscle && !(isTall || isHandsome) ->",isMuscle && !(isTall || isHandsome));
//phủ định của (true or true -> true) -> false => false and false -> false
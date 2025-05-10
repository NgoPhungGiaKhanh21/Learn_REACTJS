let x = true, y = true, z = false;

console.log("x && y && z ->", x && y && z);
//vì z là false theo nguyên tắc and thì gặp false sẽ ra kết quả false
console.log("x && y && !z ->", x && y && !z);
//vì !z là phủ định của z nên z bây giờ là true suy ra kết quả true
console.log("(x && y) || z ->",(x && y) || z );
// x && y ra true do phép tính bây giờ là OR nên true or false -> true
console.log("(x && y) || !z ->",(x && y) || !z );
// x && y ra true do phép tính bây giờ là OR mà phủ định của z là true nên true or true -> true
console.log("x && (y || z) ->",x && (y || z));
//vì true or false -> true nên true and true -> true
console.log("x && !(y || z) ->",x && !(y || z));
//vì true or false ra true nhưng phủ định lại là false từ đó true and false -> false
console.log("x && (y || !z) ->",x && (y || !z));
//true or (phủ định của false -> true) -> true từ đó true and true -> true
console.log("x && (!y || z) ->",x && (!y || z));
//vì (phủ định của true -> false) or false -> false từ đó true and false -> false
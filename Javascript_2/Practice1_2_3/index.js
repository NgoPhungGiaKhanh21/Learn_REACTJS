console.log("1. In ra dãy số từ 1 đến 500");
for(let i = 1; i <= 500; i++){
    console.log(i);
}

console.log("2. In ra các số chia hết cho 2 và 3 từ 1 đến 300");
for(let i = 1; i <= 300; i++){
    if(i % 2 == 0 && i % 3 == 0){
        console.log(i);
    }
}

console.log("3. Tính tổng các số chẵn trong đoạn [-30, 50]");
let sum = 0;
for(let i = -30; i <= 50; i++){
    if(i % 2 == 0){
        sum += i;
    }
}
console.log(sum);
const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  let primenum = [];

for(i=0;i<numbers.length;i++){
    let num = numbers[i];
    let isPrime = true;

    for(let j = 2;j<num;j++){
        if(num%j===0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(num);
        primenum.push(num)

    }
} 
let maxnum = Math.max(...primenum);
let minnum = Math.min(...primenum);
console.log("Max : ",maxnum);
console.log("Min : ",minnum);


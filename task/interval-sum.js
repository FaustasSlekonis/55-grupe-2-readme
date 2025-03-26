function intervalsum(start, end){
    let  sum = 0;
    for(let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
} 

console.log('(1)', intervalsum(0, 0));
console.log('(1)', intervalsum(0, 100));
console.log('(2)', intervalsum(-50, 50));
console.log('(3)', intervalsum(-70, 30));
console.log('(4)', intervalsum(0, 1));
console.log('(5)', intervalsum(0, 10_000));
console.log('(6)', intervalsum(0, 10_000_000));
console.log('(7)', intervalsum(0, 10_000_000_000));
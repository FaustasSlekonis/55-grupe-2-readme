function digitCount(n){
    if (typeof n !== 'number'){
        return 'Reikalingas skaicius';
    }
    //1
    //if (n === Infinity || n === -Infinity || isNaN(n)){
    //    return 'Reikalingas tikras skaicius'
    //}
    //2
    if(!isFinite(n)){
        return 'reikalingas tikras sakaicius'
    }
    const numberAsString = '' + n;
    let count = numberAsString.length;
    if(n % 1 !== 0){
        count--;
    }
    if(n < 0){
        count--;
    }


    return count;
}


console.log(digitCount());
console.log(digitCount(undefined));
console.log(digitCount('sda'));
console.log(digitCount('13511251'));
console.log(digitCount(true));
console.log(digitCount(false));
console.log(digitCount([]));
console.log(digitCount({}));
console.log(digitCount(Infinity));
console.log(digitCount(Infinity));
console.log(digitCount(Infinity));

console.log(digitCount(5), '-->', 1);
console.log(digitCount(121), '-->', 3);
console.log(digitCount(5414523), '-->', 7);
console.log(digitCount(5.5), '-->', 2);
console.log(digitCount(515116.5121115), '-->', 13);



console.log(digitCount(-5), '-->', 1);
console.log(digitCount(-121), '-->', 3);
console.log(digitCount(-5414523), '-->', 7);
console.log(digitCount(-5.5), '-->', 2);
console.log(digitCount(-515116.5121115), '-->', 13);


console.log(digitCount(1 / 3), '-->', 9);
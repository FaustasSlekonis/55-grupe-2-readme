function intervalCount (start, end, divider){
     if (typeof start !== 'number' ){
        return 'intervalo pradzia turi buti skaicius;'
     }
     if (typeof end !== 'number' ){
        return 'intervalo pabaiga turi buti skaicius;'
     }
     if (typeof divider !== 'number' ){
        return 'intervalo daugiklis turi buti skaicius;'
     }
     if(start % 1 !== 0){
        return 'intervalo pradzia turi buti skaicius'
     }
     if(end % 1 !== 0){
        return 'intervalo pabaiga turi buti sveikas skaicius'
     }
     if(divider % 1 !== 0){
        return 'daviklis turi buti sveikasis skaicius'
     }
     if (start > end){
        return 'intervalo pradzia turi buti didesne uz intervalo pabaiga'
     }


    let count = 0;

    // labai naivus variantas
    // 1)   for(let i = start; i <= end; i++){
    //     if(i % divider === 0){
    //        count++;
    //    }
    //}

    // sunkesnis variantas
    const truestart = start;
    for(let i = truestart; i <= end; i += divider){
        count++;
    }



    return `Skaicius intervale tarp ${start} iki ${end} besiadalinanciu is liekanos is ${divider} yra ${count} vienetai.`
}

console.log(intervalCount(0, 11, 3));
console.log(intervalCount(0, 10, 5));
console.log(intervalCount(0, 11, 7));
console.log('-----------------');
console.log(intervalCount('asd', 11, 3));
console.log(intervalCount(1, 'asd', 5));
console.log(intervalCount(1, 11, 'asd'));
console.log('-----------------');
console.log(intervalCount(true, 11, 3));
console.log(intervalCount(1, true, 5));
console.log(intervalCount(1, 11, true));
console.log('-----------------');
console.log(intervalCount(0.3, 11, 3));
console.log(intervalCount(1, 11.3, 5));
console.log(intervalCount(1, 11, 3.3));
console.log('-----------------');
console.log(intervalCount(NaN, 11, 3));
console.log(intervalCount(1, NaN, 5));
console.log(intervalCount(1, 11, NaN));
console.log('-----------------');
console.log(intervalCount(0, 11, 3));
console.log(intervalCount(0, 11, 5));
console.log(intervalCount(0, 11, 7));
console.log('-----------------');
console.log(intervalCount(1, 11, 3));
console.log(intervalCount(1, 11, 5));
console.log(intervalCount(1, 11, 7));
console.log('-----------------');
console.log(intervalCount('asd', 11, 7));
console.log(intervalCount(1, 'asd', 7));
console.log(intervalCount(1, 11, 'asd'));
console.log(intervalCount(true, 11, 7));
console.log(intervalCount(1, true, 7));
console.log(intervalCount(1, 11, true));
console.log(intervalCount(undefined, 11, 7));
console.log(intervalCount(1, undefined, 7));
console.log(intervalCount(1, 11, undefined));
console.log(intervalCount(null, 11, 7));
console.log(intervalCount(1, null, 7));
console.log(intervalCount(1, 11, null));
console.log(intervalCount([], 11, 7));
console.log(intervalCount(1, [], 7));
console.log(intervalCount(1, 11, []));
console.log(intervalCount({}, 11, 7));
console.log(intervalCount(1, {}, 7));
console.log(intervalCount(1, 11, {}));
console.log(intervalCount(intervalCount, 11, 7));
console.log(intervalCount(1, intervalCount, 7));
console.log(intervalCount(1, 11, intervalCount));

console.log(intervalCount(0.1, 11, 7));
console.log(intervalCount(0, 11.1, 7));
console.log(intervalCount(0, 11, 7.1));

console.log(intervalCount(NaN, 11, 7));
console.log(intervalCount(0, NaN, 7));
console.log(intervalCount(0, 11, NaN));

console.log(intervalCount(Infinity, 11, 7));
console.log(intervalCount(100, 11, 7));
console.log(intervalCount(0, Infinity, 7));
console.log(intervalCount(0, 11, Infinity));

console.log(intervalCount(-Infinity, 11, 7));
console.log(intervalCount(0, -Infinity, 7));
console.log(intervalCount(0, 11, -Infinity));


    // patikriname ar gavome masyva
    // sumuojame visus skaicius ir ju kieki:
    // let sum = 0;
    // let count = 0;
    //    einame per visa masyva ir imame kiekviena skaiciu
    //    jei sutinkame ne skaiciu, tai ji ignoruojame
    //    jei sutinkame skaiciu, kuris nera sveikasis ir nuo 1 iki 10 (imtinai), tai ignoruojame
    //    jei sutinkame skaiciu, padidiname suma
    //    jei sutinkame skaiciu, padidiname kieki




function marksAverage(list) {
    let sum = 0;
    let count = 0;
    
    
    for (let i = 0; i < list.length; i++) {
        let current = list[i];

        
        if (typeof current === 'number' && current >= 1 && current <= 10 && Number.isInteger(current)) {
            sum += current;  
            count++;  
        }
    }

    
    if (count === 0) {
        return 0;
    }
    
    
    return sum / count;
}


console.log(marksAverage([]));  
console.log(marksAverage([10]));  
console.log(marksAverage([2]));  
console.log(marksAverage([10, 2, 8, 4, 6]));  
console.log(marksAverage([8, 4, 7]));  
console.log(marksAverage([2, 'n'])); 
console.log(marksAverage(['n']));  
console.log(marksAverage([8, 'n', 4, 7]));  
console.log(marksAverage(['n', 10, 2, 8, 4, 6]));  
console.log(marksAverage('labas'));  
console.log(marksAverage(true));  

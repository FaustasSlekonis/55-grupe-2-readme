/*
ARRAY- sarasas
*/



const empty = [];
console.log(empty);

const luckyNumbers = [7, 7777, 13, 14, 8, 16];
console.log(luckyNumbers);

const students = ['Jonas',  'Maryte', 'Petras', 'Ona'];
console.log(students);

const firstNumber = luckyNumbers[0];
console.log(firstNumber);

console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(luckyNumbers[3]);
console.log(luckyNumbers[4]);


console.log(empty.length);
console.log(luckyNumbers.length);
console.log(students.length);


console.clear();

const numbers = [10, 2, 5, 20, 40]
const totalsum1 = numbers[0] + numbers[4] + numbers[2] + numbers[1] + numbers[4];

console.log(totalsum1);

let totalsum2 = 0;
console.log(totalsum2);


totalsum2 = totalsum2 + numbers[0];
totalsum2 = totalsum2 + numbers[1];
totalsum2 = totalsum2 + numbers[2];
totalsum2 = totalsum2 + numbers[3];

console.log(totalsum2);

let totalsum3 = 0;

totalsum3 += numbers[0];
totalsum3 += numbers[1];
totalsum3 += numbers[2];
totalsum3 += numbers[3];

console.log(totalsum3);


const dictionary = ['pomidoras', 'agurkas', 'bulve', 'kefyras', 'druska', 'svogunu laiskai', 'lasiniai'];

// patiekalu reikes a b c d
const sentence1 = 'patiekalu reikes: ' + dictionary[0] + ', ' + dictionary[2]+ ', ' + dictionary[3]+ ', ' + dictionary[4] + '. ';

console.log(sentence1)


let sentence2 = 'patiekalu reikes: '
sentence2 = sentence2 + dictionary[0];
sentence2 = sentence2 + ', ';
sentence2 = sentence2 + dictionary[1];
sentence2 = sentence2 + ', ';
sentence2 = sentence2 + dictionary[3];
sentence2 = sentence2 + ', ';
sentence2 = sentence2 + dictionary[4];
sentence2 = sentence2 + ', ';
sentence2 = sentence2 + dictionary[5];
sentence2 = sentence2 + ', ';
sentence2 = sentence2 + dictionary[5];
sentence2 = sentence2 + ', ';

sentence2 = 'patiekalu reikes: '
sentence2 += dictionary[0] + ', ';
sentence2 += dictionary[1] +', ';   
sentence2 += dictionary[0] + ', ';
sentence2 += dictionary[0] + ', ';
sentence2 += dictionary[0] + ', ';

console.log(sentence2)

let = k = 0;
k = k + 1;
k += 1;
k++;
++k;

let i = 0;
let sentence4 = 'Patiekalui reikes: ';
sentence4 +- dictionary[i++] + ', ';
sentence4 +- dictionary[i++] + ', ';
sentence4 +- dictionary[i++] + ', ';
console.log(sentence4);
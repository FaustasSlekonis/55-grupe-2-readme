/*
For (loop) ž ciklas
*/

for(let i = -5; i < 8; i++) {
    console.log('a)number', i);
}

console.log('----------------');


for(let i = 1; i <= 15; i++) {
    console.log('b)number', i);
}

console.log('----------------');

for(let i = 7; i >= -8; i--) {
    console.log('c)number', i);
}

console.log('----------------');

for(let i = 0; i < 8; i += 2) {
    console.log('d)kas du', i);
}


console.log('----------------');


for(let k = 0; k < 1; k += 0.1) {
    console.log(k);
}

console.log('----------------');


for(let k = 0; k < 10; k++) {
    console.log(k / 10);
}

console.log('----------------');

console.log(0.1 +0.2);
console.log((10 + 20) / 100);
console.log((399 + 20) / 100);

console.log('----------------');


for(let i = 0; i < 4; i++){
    console.log('labas');
}

console.log('----------------');

const n = 9;

console.log(`${n} * 1 = ${n * 1}`);
console.log(`${n} * 2 = ${n * 2}`);
console.log(`${n} * 3 = ${n * 3}`);
console.log(`${n} * 4 = ${n * 4}`);

console.log('----------------');

for(let i = 1; i <= 10; i++){
    console.log(`${n} * ${i} = ${n * i}  `)
}

const marks = [10, 2 ,8, 4, ]

let sum = 0;

sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];


console.log(sum);

let sum2 = 0;

for(let i=0; i< marks.length; i++){
    console.log('index', i, '-->', marks[i])
    sum2 += marks[i];
}

console.log(sum2);


console.log('----------------');

//studento vardas yra Vardas

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for(let i = 0; i < names.length; i++){
    const s = (`studento vardas yra ${names[i]}`)
    console.log(s);
}

// vardas "Vardas" yra sudarytas is N raidziu
for (let i = 0; i < names.length; i++){
    const vardas = names [i];
    const ilgis = vardas.length;
    const s = `vardas "${vardas}" yra sudarytas is ${ilgis} raidziu.`; 
    console.log(s);
}
function empty() {
    // logika
}

const a = empty();
const b = empty();
console.log(a);
console.log(b);

console.log(empty());

function penki() {
    return 5;
}

const c = penki();
console.log(c);

function hi() {
    return 'Labas!';
}

const d = hi();
console.log(d);

// Jonas -> Labas, Jonas!
// Maryte -> Labas, Maryte!
// Petras -> Labas, Petras!
// Ona -> Labas, Ona!

function hiPerson(name) {
    // return 'Labas, ' + name + '!';
    return `Labas, ${name}!`;
}

console.log(hiPerson('Jonas'));
console.log(hiPerson('Maryte'));
console.log(hiPerson('Petras'));
console.log(hiPerson('Ona'));
console.log(hiPerson());

//2+2 = 4 
//7+5 = 12

function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const e = sum(2, 2);
console.log(e);

const f =sum(7, 5);
console.log(f);
console.clear();


function priceWithVAT(price){
    const updatedPrice = price * 1.21;
    
    return price * 1.21 + ' Eur ';
}

const p1 = priceWithVAT(100);
console.log(p1);

const p2 = priceWithVAT(200);
console.log(p2);

const p3 = priceWithVAT(73);
console.log(p3);

console.clear();


//Jonas -> Zodzis "Jonas" yra sudarytas is 5 zodziu.
//Maryte -> Zodzis "Maryte" yra sudarytas is 6 zodziu.
//Petras -> Zodzis "Petras" yra sudarytas is 6 zodziu.
//Ona -> Zodzis "Ona" yra sudarytas is 3 zodziu.

function nameLength(name){
    const size = name.length;
    return `Zodzis "${name}" yra sudarytas is ${size} raidziu.`;
}

const n11 = nameLength('Jonas');
const n12 = nameLength('Maryte');
const n13 = nameLength('Petras');
const n14 = nameLength('Ona');

console.log(n11);
console.log(n12);
console.log(n13);
console.log(n14);

console.clear();


//5 -> gaustas skaicius: 5.
//-13 -> gaustas skaicius: -13.
//777 -> gaustas skaicius: 777.


function gotNumber(n){
    //return 'Gaustas skaicius: ' + n + '.';
    return ` gaustas skaicius: ${n}.`
}

const gn1 = gotNumber(5);
const gn2 = gotNumber(-13);
const gn3 = gotNumber(777);

console.log(gn1);
console.log(gn2);
console.log(gn3);

console.clear();

// 2,2  -> 2 + 2 = 4
// 7,5  -> 7 + 5 = 12
// 2,2  -> -7 + 15 = 8

function sum(a,b) {
    const result = a + b;
    return `${a} + ${b}= ${result}`;
}

console.log(sum (2,2));
console.log(sum (7,5));
console.log(sum (-7,15));
console.clear();

// ND - perdaryti analogiskai su -, * ir / operacijomis

function sum(a1,b1) {
    const result = a1 - b1;
    return `${a1} - ${b1}= ${result}`;
}

console.log(sum (2,2));
console.log(sum (7,5));
console.log(sum (-7,15));






function sum(a2,b2) {
    const result = a2 * b2;
    return `${a2} * ${b2}= ${result}`;
}

console.log(sum (2,2));
console.log(sum (7,5));
console.log(sum (-7,15));



/*function sum(a3,b3) {
    const result = a3 / b3;
    return `${a3} / ${b3}= ${result}`;
}

console.log(sum (2,2));
console.log(sum (7,5));
console.log(sum (-7,15));
*/


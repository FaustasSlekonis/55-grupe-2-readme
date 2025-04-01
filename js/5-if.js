/*
IF - palyginimo savyga

Palyginimo operatoriai:
- visi: >, <, >=, <=, ==, ===, !=, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if ()
if () {} else if () else {}
if () {} ... else if () ...
if () {} ... else if () ... else {}
*/

console.log('START');

if (4 > 2) {
    console.log('--- taip');
} else {
    console.log('--- ne');
}

console.log('END');

console.clear();

const temp = -2;

if (temp >= 18) {
    console.log('Silta ');
} else {
    console.log('Salta ');
}

// jei zemiau 0 -> salta
// jei zemiau 10 -> meh
// jei zemiau 22 -> silta
// jei daugiau -> karsta

const temp2 = 22;

if (temp2 < 0) {
    console.log('Šalta ');
} else if (temp2 < 10) {
    console.log('Meh ');
} else if (temp2 < 22) {
    console.log('Šilta ');
} else {
    console.log('Karšta ');
}

const temp3 = -55;

if (temp3 < 0) {
    console.log('Šalta ');
}

if (temp3 < 10) {
    console.log('Meh ');
}

if (temp3 < 22) {
    console.log('Šilta ');
} else {
    console.log('Karšta ');
}

console.clear();

const clientValue = '4';

if (4 === clientValue) {
    console.log('tenkina');
} else {
    console.log('NE-tenkina');
}
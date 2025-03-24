/*
IF - palyginimo savyga

Palyginomo operatoriai
-visi >, < ,>= , <=, ==, ===, !=, !==
-naudotini: <, >, >=, <=, ===, !==
-neneuadotini: ==, !=

Kodo sablonai:
if() {}
if() {} else {}
if() {} else if ()
if() {} else if () else {}
if() {} .... else if () ...
if() {} .... else if () .... else {}

*/

console.log('START');
 
if (4 > 2){
    console.log('---- taip');
} else {
    console.log('---- ne');
}

console.log('END');

console.clear();

const temp = -2;

if(temp >= 18){
    console.log('silta');
} else{
    console.log('salta')
}
console.clear();

//jei zemiau 0 - salta 
// jei zemiau 10 - meh
// jei zemiau 22 -silta
//jei daugiau - karsta

const temp2 =23;

if(temp2 < 0){
    console.log('Salta');
} else if (temp2 < 10 ){
    console.log('Meh');
} else if (temp2 < 22){
    console.log('Silta');
}else {
    console.log('Karsta');
}

console.clear();

const clieantValue = '4';

if (4 === clieantValue){
    console.log('tenkina');
} else {
    console.log('ne-tenkina');
}
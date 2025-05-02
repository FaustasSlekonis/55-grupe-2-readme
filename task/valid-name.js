/*
Funkcija, kuri gavusi zodi, is jo padaro korektiska varda.
*/


function validName(name){
    const firstLetter = name[0].toUpperCase();
    const restLetters = name.slice(1).toLowerCase();


    return firstLetter + restLetters;
}

console.log(validName('jonas'), '-->', 'Jonas');
console.log(validName('maRYTE'), '-->', 'Maryte');
console.log(validName('PeTrAs'), '-->', 'Petras');
console.log(validName('ONA'), '-->', 'Ona');




let result = 10 / "2";
console.log(result);


console.log([1,2,3] + [4,5,6])



console.log(typeof [])


let arr = [1,2,3];
console.log(arr.length);
console.log("------------------------")

let a = "5";
let b = 2;
console.log(a-b);


let a1 = "HEllo"
let b1 = a1;
b1 = "Waorld";
console.log(a1)


let x = 10;
if(x=5){
    console.log("X yra 5")
}



let foo;
console.log(foo);


let numbers = [1,2,3];
numbers[10] = 11;
console.log(numbers.length);

function add(a,b = 5){
    return a+b;
}
console.log(add(10))
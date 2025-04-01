function raidziu(n1, n2){
     const kazkas = n1 + n2;
     return `${n1} + ${n2} = ${kazkas}`;
 }
 
 console.log(raidziu(2, 2));
 console.log(raidziu(7, 5));
 console.log(raidziu(10, 20));
 
 console.log('Ar mergina eis i pasimatinma su vaikinu');
 
 const Grazus = true;
 const turtinas = true;
 const Nesiprausia = false;
 
 console.log(Grazus && turtinas || Nesiprausia);
 
 console.clear();
 
 let sarasas = [1, 2, 3, 4, 5, 6];
 let arYra3 = sarasas.includes(3); 
 if (arYra3) {
     console.log('Sarase yra skaicius 3');
 } else {
     console.log('Sarase nera skaiciaus 3');
 }
 
 console.clear();
 
 function textsize(sarasas) {
     if (sarasas.length === 0) {
         return 'Sarasas tuscias';
     }
     if (sarasas.length <= 10) {
         return `Sarasas is mazai raidziu sudarytas is ${sarasas.length}`;
     }
     return `Sarasas yra ilgesnis nei 10 raidziu`;
 }
 
 console.log(textsize(''));
 console.log(textsize('sdasd'));
 
 console.log('------------------------------');




 
 const tuscias = [];
 if (tuscias.length === 0) {
     console.log('Tuscias tekstas');
 } else {
     console.log('Ne tuscias tekstas');
 }
 
 console.log('------------------------------');




 
 const array = [1, -2, 3, -4];
 if (array.some(num => num >= 0)) {
     console.log('Sarase yra teigiamas skaicius');
 } else {
     console.log('Sarase tik neigiamas');
 }
 
 console.log('------------------------------');





 
 const sarasas1 = [2, 4, 6];
 let visilyginiai = sarasas1.every(num => num % 2 === 0);
 if (visilyginiai) {
     console.log('Visi skaiciai lyginiai');
 } else {
     console.log('Sarase yra nelyginiu skaiciu');
 }
 
 console.log('------------------------------');





 
 let arr1 = [1, 3, 5];
 if (arr1[0] > arr1[arr1.length - 1]) {
     console.log('Pirmas skaičius yra didesnis už paskutini');
 } else {
     console.log('Pirmas skaičius nėra didesnis už paskutini');
 }

 console.log('------------------------------');





 const sarasas2 = [1, 2, 3, 4, 5, 6];  

if (sarasas2.length > 5) {
    console.log('Sąrašo ilgis yra didesnis nei 5');
} else {
    console.log('Sąrašo ilgis nėra didesnis nei 5');
}

console.log('------------------------------');





// Patikriname, ar visi elementai yra tipo 'string'
const sarasas3 = ["obuolys", "bananas", "vyšnia"];  


const tikTekstas = sarasas3.every(element => typeof element === 'string');

if (tikTekstas) {
    console.log('Sąraše yra tik teksto tipo kintamieji');
} else {
    console.log('Sąraše yra ne teksto tipo kintamieji');
}
console.log('------------------------------');



console.log('------------------------------');


const sarasas4 = [2, 5, 12, 4]; 
let didziausias = sarasas4[0];


for (let i = 1; i < sarasas4.length; i++) {
    if (sarasas4[i] > didziausias) {
        didziausias = sarasas4[i];
    }
}

if (didziausias > 10) {
    console.log(`Didžiausias skaičius ${didziausias} yra didesnis už 10`);
} else {
    console.log(`Didžiausias skaičius ${didziausias} nėra didesnis už 10`);
}

console.log('------------------------------');

const sarasas5 = [2, 2, 2, 2, 2, 5, 6];
const skaicius = 2;  

let pasikartojimai = 0;


for (let i = 0; i < sarasas5.length; i++) {
    if (sarasas5[i] === skaicius) {
        pasikartojimai++;
    }
}

if (pasikartojimai > 3) {
    console.log(`Sąraše yra daugiau nei 3 skaičiaus ${skaicius} elementai.`);
} else {
    console.log(`Sąraše nėra daugiau nei 3 skaičiaus ${skaicius} elementai.`);
}


console.log('------------------------------');


const duotasSkaicius = 3;  

if (duotasSkaicius > 0) {
    console.log("Skaičius yra teigiamas.");
} else if (duotasSkaicius < 0) {
    console.log("Skaičius yra neigiamas.");
} else {
    console.log("Skaičius yra lygus nuliui.");
}

console.log('------------------------------');

const duotasSkaicius1 = 15;

if (duotasSkaicius1 % 5 === 0) {
    console.log("Skaičius dalijasi iš 5.");
} else {
    console.log("Skaičius nedalijasi iš 5.");
}

console.log('------------------------------');

const str = "hello";

if (str.length > 5) {
    console.log("Eilutė turi daugiau nei 5 simbolius.");
} else {
    console.log("Eilutė turi 5 arba mažiau simbolių.");
}

console.log('------------------------------');

const amzius1 = 20;

if (amzius1 >= 18) {
    console.log("Asmuo turi teisę balsuoti.");
} else {
    console.log("Asmuo neturi teisės balsuoti.");
}


console.log('------------------------------');


const amzius2 = 15;

if (amzius2 >= 13 && amzius2 <= 19) {
    console.log("Asmuo yra paauglys.");
} else {
    console.log("Asmuo nėra paauglys.");
}

console.log('------------------------------');


const skaicius3 = 7;

if (skaicius3 % 2 !== 0) {
    console.log("Skaičius yra nelyginis.");
} else {
    console.log("Skaičius yra lyginis.");
}

console.log('------------------------------');


const zodis = "JavaScript";

if (zodis === "JavaScript") {
    console.log("Eilutė yra lygi 'JavaScript'.");
} else {
    console.log("Eilutė nėra lygi 'JavaScript'.");
}

console.log('------------------------------');

const skaicius4 = 15;

if (skaicius4 >= 10 && skaicius4 <= 20) {
    console.log("Skaičius yra tarp 10 ir 20.");
} else {
    console.log("Skaičius nėra tarp 10 ir 20.");
}


console.log('------------------------------');

const skaicius5 = 150;

if (skaicius5 >= 100) {
    console.log("Skaičius yra didesnis arba lygus 100.");
} else {
    console.log("Skaičius yra mažesnis už 100.");
}

// 1. Spausdinkite skaičius nuo 1 iki 10 naudodami for ciklą. 
// 2. Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą. 
// 3. Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą. 
// 4. Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą. 
// 5. Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.). 
// 6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.). 
// 7. Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.). 
// 8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.). 
// 9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.). 
// 10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3. 
// 11. Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5. 
// 12. Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5. 
// 13. Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!". 


console.log('------------------------------');
//1. Spausdinkite skaičius nuo 1 iki 10 naudodami for ciklą. 
for (let i = 1; i <= 10; i++) {
     console.log(i);
 }

 console.log('------------------------------');
//2. Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą. 
 for (let i = 10; i >= 1; i--) {
     console.log(i);
 }


 console.log('------------------------------');
//3. Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą. 


 for (let i = 0; i <= 20; i += 2) {
     console.log(i);
 }
 console.log('------------------------------');
//4. Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą.

 for (let i = 1; i <= 20; i += 2) {
     console.log(i);
 }
 console.log('------------------------------');

 //5. Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.). 

 for (let i = 1; i <= 10; i++) {
     console.log(i * i);
 }



 console.log('------------------------------');
//6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.). 
 for (let i = 1; i <= 10; i++) {
     console.log(i * i * i);
 }

 console.log('------------------------------');
//7. Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.). 
 for (let i = 1; i <= 10; i++) {
     console.log(`7 x ${i} = ${7 * i}`);
 }



 console.log('------------------------------');
 //8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.). 

 for (let i = 1; i <= 5; i++) {
     console.log('*'.repeat(i));
 }




 console.log('------------------------------');
//9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.).


 for (let i = 5; i >= 1; i--) {
     console.log('*'.repeat(i));
 }



 console.log('------------------------------');
 //10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3. 

 for (let i = 1; i <= 50; i++) {
     if (i % 3 === 0) {
         console.log(i);
     }
 }

 console.log('------------------------------');


//  11. Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5. 

 for (let i = 1; i <= 50; i++) {
     if (i % 5 === 0) {
         console.log(i);
     }
 }
 


 console.log('------------------------------');
 // 12. Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5. 

 for (let i = 1; i <= 100; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
         console.log(i);
     }
 }


 console.log('------------------------------');


 // 13. Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!"

for (let i = 1; i <= 5; i++) {
    console.log("Hello, World!");
}



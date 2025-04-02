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
 
 let sarasas12 = [1, 2, 3, 4, 5, 6];
 let yra3 = false;
 for(let i = 0; i < sarasas12.length; i++){
     if (sarasas12[i] == 3){
         yra3 = true
     }
 }
 if(yra3 == true){
     console.log('yra 3 sarase');
 }
 

 
 console.log('--------------------------------');
 
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
 console.log(textsize('sdasddsadsdasdsda'));
 
 console.log('------------------------------');




 
 const tuscias = [];
 if (tuscias.length === 0) {
     console.log('Tuscias tekstas');
 } else {
     console.log('Ne tuscias tekstas');
 }
 
 console.log('------------------------------');




 
 const array1 = [1, -2, 2, -4];
 let arYraTeig = false
 
 for(let i = 0; i < array1.length; i++){
     if (array1[i] > 0){
         arYraTeig = true
     }
 }
 if(arYraTeig == true){
     console.log('sarase yra teigemu');
 }


 console.log('------------------------------');




const sarasas = [2, 4, 6]
let visilyginiai = true;

for(let i = 0; i < sarasas.length; i++){
    if (sarasas[i] %2 !== 0){
        visilyginiai = false;
        break;
    }
}
    if(visilyginiai){
        console.log('visi skaiciai liginiai')
    }else{
        console.log('visi skaicia nera liginiai')
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
 console.log('-----------arba----------')
 for(let i = 1; i <= 10; i++){
     console.log(`${i}^2 = ${i ** 2}`)
 }
 


 console.log('------------------------------');
//6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.). 
 for (let i = 1; i <= 10; i++) {
     console.log(`${i}^3 = ${i * i * i}`);
 }
console.log('-----------arba----------')
 for(let i = 1; i <= 10; i++){
     console.log(`${i}^3 = ${i ** 3}`)
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
console.log('-----------arba----------')
for(let i = 1; i <= 5; i++){
   let zvaigzdes = '';
   for  (let j = 1; j <= i; j++){
   zvaigzdes += '*';
    }
    console.log(zvaigzdes)
}
console.log('------------------------------');
 //9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.). 
 for (let i = 5; i >= 1; i--) {
    console.log('*'.repeat(i));
}
console.log('-----------arba----------')


 for (i = 5; i >= 1; i--){
    let zvaigzdes1 = '';
    for (let j = 1; j <= i; j++){
        zvaigzdes1 += "*";
    }
    console.log(zvaigzdes1)
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


// Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų 
// atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … ).  
// a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x 
// km/h greičiu per y valandų 
// b. Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x 
// valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h) 
// c. Parašykite funkciją, kuri nurodytų į kokį tolimiausią miestą mes galėtume 
// nuvažiuoti su k kiekiu pinigų, jei už vieną litrą degalų turime mokėti j eurų. 
// Kelionę pradedame su 30 litrų benzino bakelyje, už kuriuos mokėti nereikia. 
// Nuvažiuodami vieną kilometrą sudeginame x kiekį degalų 
// d. Susikurkite sąrašą kelio sąlygoms iki kiekvieno miesto apibūdinti (pavyzdžiui: 
// geras, prastas, taisomas). Geromis kelio sąlygomis iki miesto važiuojame 
// paprastai, prastomis kelio sąlygomis iki miesto važiuojame 1.5 karto ilgiau, o 
// taisomo kelio sąlygomis važiuojame 2 kartus ilgiau. Parašykite funkciją, kuri 
// pagal kelio sąlygas ir duotus atstumus, parašytų kiek laiko tektų važiuoti iki 
// kiekvieno miesto

const miestai = ['Kaunas', 89.6,'Klaipėda', 307.3,'Šiauliai', 214.1,'Panevėžys', 120.6, 'Alytus', 66.0, 'Marijampolė', 161.8, 'Jonava', 97.9,'Jonava', 97.9, 'Tauragė', 254.5, 'Utena', 124.5, 'Kėdainiai', 137.4];

for (let i = 0; i < mietsas.length; i +=2){
    const city = 0;
}
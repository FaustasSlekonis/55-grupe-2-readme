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
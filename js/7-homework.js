
//Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis, Po kiekvieno jų inicijavimo, išvesti į console
let pirmasSkaičius = 5;
let antrasSkaičius = 10;
let trečiasSkaičius = 15;


console.log(pirmasSkaičius);
console.log(antrasSkaičius);
console.log(trečiasSkaičius);



//Sukurti 3 kintamuosius su teksto tipo reikšmėmis Po kiekvieno jų inicijavimo, išvesti į console
let pirmasTekstas1 = 'Pirmas tekstas Sveikas';
let antrasTekstas1 = 'Antras tekstas Sveikesnis';
let trečiasTekstas1 = 'Trečias tekstas Sveikiauses';


console.log(pirmasTekstas1);
console.log(antrasTekstas1);
console.log(trečiasTekstas1);

console.clear();

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis Po kiekvieno jų inicijavimo, išvesti į console

let pirmasSarasas2 = [1, 2, 3, 4, 5];
let antrasSarasas2 = [6, 7, 8, 9, 10];
let trečiasSarasas2 = [11, 12, 13, 14, 15];


console.log(pirmasSarasas2);
console.log(antrasSarasas2);
console.log(trečiasSarasas2);

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis Po kiekvieno jų inicijavimo, išvesti į console


let pirmasSarasas3 = ["obuolys", "bananas", "kriaušė", "apelsinas", "vynuogės"];
let antrasSarasas3 = ["ruduo", "pavasaris", "vasara", "žiema", "lietus"];
let trečiasSarasas3 = ["kaimas", "miestas", "kalnai", "jūra", "miškas"];


console.log(pirmasSarasas3);
console.log(antrasSarasas3);
console.log(trečiasSarasas3);

console.clear();

//Susumuoti visus skaičiaus tipo kintamuosius Rezultatą išvesti į console

let Kintamasis1 = 5
let Kintamasis2 = 10
let Kintamasis3 = 4
let Kintamasis4 = 9

let suma = (Kintamasis1 + Kintamasis2 + Kintamasis3 +Kintamasis4);
console.log('Skaičiaus tipo kintamųjų suma:' + suma )

console.clear();

//Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas Rezultatą išvesti į console


let Zodis1 = "Sveiki"
let Zodis2 = "Mano"
let Zodis3 = "Vardas"
let Zodis4 = "Faustas"

let suma1 = (Zodis1 +" " + Zodis2 + " "+ Zodis3 +" "+ Zodis4);
console.log('Teksto tipo kintamieji su tarpais:' + suma1 )

//Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką 
// 1-2+3-4+5 Rezultatą išvesti į console
console.clear();

const Sarasas1 = [1, 2, 3, 4, 5];

console.log(Sarasas1[0] - Sarasas1[1] + Sarasas1[2] - Sarasas1[3] + Sarasas1[4])


console.clear();


//Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip,
//  jog tarp jų būtų kablelis ir tarpas

const Sarasas2 = ['Vienas', 'Du', 'Trys', 'Keturi']

console.log(Sarasas2[3] + ", " + Sarasas2[2] + ", " + Sarasas2[1] + ", " + Sarasas2[0]+ ", " )


console.clear();

//Tarpusavyje palyginti skaičiaus tipo kintamuosius:
//kuris didesnis


let skaicius1 = 10
let skaicius2 = 20
 
if (skaicius1 > skaicius2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}


if (skaicius1 < skaicius2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}


if (skaicius1 == skaicius2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}


if (skaicius1 != skaicius2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (skaicius1 >= skaicius2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (skaicius1 <= skaicius2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
console.clear();





function nameLength(name){
    const size = name.length;
    return `Zodis "${name}" yra sudarytas is ${size} raidziu.`;
}

const n1 = nameLength('Pomidoras');
const n2 = nameLength('Agurkas');


console.log(n1);
console.log(n2);

if (n1 > n2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (n1 < n2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}


if (n1 == n2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (n1 != n2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}


if (n1 >= n2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (n1 <= n2){
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}


console.clear();

let sarasas1 = [1, 2, 3, 4];
let sarasas2 = [1, 2, 3];


console.log(`Sąrašo 1 ilgis: ${sarasas1.length}`);
console.log(`Sąrašo 2 ilgis: ${sarasas2.length}`);

if (sarasas1.length > sarasas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (sarasas1.length < sarasas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (sarasas1.length == sarasas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (sarasas1.length != sarasas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (sarasas1.length >= sarasas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (sarasas1.length <= sarasas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}


console.clear();

const skaiciai11 = [1,2,3];

 function addNum (sk){
    return (sk[0] + sk[1] + sk[2]);
 }

 function tellNum  (sk)
 {
    console.log(sk[0]);
 }
console.log(addNum(skaiciai11));



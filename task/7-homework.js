
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

console.clear();

//Funkcija pavadinimu “tusciaFunkcija”:

function tusciaFunkcija() {
    return false;
  }
  
  console.log(tusciaFunkcija());

console.clear();

//Funkcija pavadinimu “daugyba”:

function daugyba(a, b) {
    const sandauga = a * b;
    return sandauga;
}


const skaicius11 = 5;
const skaicius12 = 3;
const skaicius13 = 10;

console.log(daugyba(skaicius11, skaicius12)); 
console.log(daugyba(skaicius13, skaicius12)); 
console.log(daugyba(skaicius11, skaicius13)); 

// 1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
function sumInterval(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumInterval(0, 0)); // 0
console.log(sumInterval(0, 4)); // 10
console.log(sumInterval(0, 100)); // 5050
console.log(sumInterval(574, 815)); // 168069
console.log(sumInterval(-50, 50)); // 0
console.log(sumInterval(-70, 30)); // -202

// 2. Perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
function reverseString (text){
    let result = '';
    for(let i  = 0; i < text.length; i++){
        result = text[i] + result;
    }

    return result;
}

console.log(reverseString('abc'));

// 3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7:
function countDivisibles(start, end, divisor) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (i % divisor === 0) {
            count++;
        }
    }
    return count;
}

function divisiblesReport(start, end) {
    console.log(`Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš 3 yra ${countDivisibles(start, end, 3)} vienetai.`);
    console.log(`Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš 5 yra ${countDivisibles(start, end, 5)} vienetai.`);
    console.log(`Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš 7 yra ${countDivisibles(start, end, 7)} vienetai.`);
}

divisiblesReport(0, 11);
divisiblesReport(8, 31);
divisiblesReport(-18, 18);

console.log("-------------------------------")


function biggestNumber(list) {
    if (!Array.isArray(list)) {
        return 'Duomenys turi buti sarase.';
    }

    if (list.length === 0) {
        return 'Tusciame sarase didziausio skaiciaus rasti neimanoma.';
    }

    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number' || !isFinite(list[i])) {
            continue;
        }

        if (list[i] > biggest) {
            biggest = list[i];
        }
    }

    return biggest;
}

console.log(biggestNumber([1 ,2, 3, 4, 6,]), '----->', 6,);

console.log(biggestNumber('labas'));
console.log(biggestNumber([]), '----->', 0,);

console.log(biggestNumber(['asd', 2, 3, 4,]), '----->', 4);


console.log(biggestNumber([true, 2, 3, 4,]), '----->', 4);
console.log(biggestNumber([ 2, 3, true,]), '----->', 4);
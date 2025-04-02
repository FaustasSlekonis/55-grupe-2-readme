// 1. Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą 
let suma = 0;
for(let i = 5; i <= 15; i++){
    suma += i;
}
console.log(suma)





// 2. Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną 

let zodis = 'Vakaras';
for(let i = 0; i < zodis.length; i++){
    console.log(zodis[i])
}



// 3. Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę 
let daugyba = 6;
for(let i = 0; i <= 10; i++){
    console.log(`${i} * 6 = ${i * daugyba}`)
}
// 4. Parašykite for ciklą, kuris į consolę išvestų nuo 5 iki 1, ir po vieneto (vietoje 0) į 
// ekraną išvestų žodį ‘BOOM’ 


// for(let i = 5; i >= 0; i--){
//     if (i == 0){
//         return console.log('boom')
//     }else(console.log(i))
    
// }


// 5. Parašykite for ciklą, kuris isudėtų visus lyginius skaičius nuo 3 iki 18 

for (let i = 3; i <= 18; i++) {
    if (i %2 == 0){
        console.log(i)
    }
  }
/*sugalvota gudrybe */console.log('---------------')
  for (let i = 4; i <= 18; i+=2) {
    
        console.log(i)
 
  }
  console.log('---------------')
// 6. Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console. 

let sarasas = [12, 14, 15 ,13 ,16]
for(let i= 0; i < sarasas.length; i++){
    console.log(sarasas[i])
}




// 7. Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus, pridėdamas ‘Mano 
// vardas - ’ console log eilutės pradžioje 


let sarasasV = [`jonas`,`petras`,`sigutis`,`vladikas`]
for(let i= 0; i < sarasasV.length; i++){
    console.log(`Mano vardas - ${sarasasV[i]}`)
}



// 8. Parašykite for ciklą, kuris sudėtų visus sąrašo skaitinius elementus. 
    let sarasasSk = [12, 14, 15 ,13 ,2]
    let suma1 = 0
    for(let i = 0; i < sarasasSk.length; i++){
        suma1 += sarasasSk[i]
    }
    console.log(suma1)



    console.log('---------------')
// 9. Parašykite for ciklą, kuris išvestų į console visus sąrašo elementus nuo paskutinio iki 
// pirmo 


let nuoGalo = ['vienas','du','trys','keturi']
for(let i = nuoGalo.length - 1; i >= 0 ; i--){
    console.log(nuoGalo[i]);
}








// 10. Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės 
// (1, 2, 5, 10, 20, 50, 100, 200, 500) 




// 11. Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį 
// Žodis, kurio reikšmė yra ‘Labas’ 

console.log('---------------')


let labasS = [`L`, `a`, `b`, `a`, `s`]
let sum = "";
for(let i = 0; i < labasS.length; i++){
    sum += labasS[i]
    
}
console.log(sum)



console.log('---------------')

// 12. Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas 
// raidę. 

//jeigu gerai supratau klausima:D


let zodisP = 'Programavimas'
    for(let i = 0; i < zodisP.length; i++){
        console.log(zodisP[i])
    }







    console.log('---------------')

// 13. Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į 
// consolę reikšmę 
let sum3 = 1;
for(let i = 2; i <= 10; i++){
    sum3 *= i;
}
console.log(sum3)




console.log('---------------')

// 14. Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą 
let sum30 = 0;
for (let i = 0; i <= 30; i++){
    if(i % 2 != 0){
    sum30 += i;
    }
}
console.log(sum30)

console.log('---------------')

// 15. Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10 

for(let i = 20; i >= 10; i--){
    console.log(i)
}




console.log('---------------')

// 16. Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’]  
// elementus vienas po kito nuo galo iki pradžios 
    let sarasasAtbul =[ `s`, `a`, `b`, `a`, `L`]  
    let zodisM = '';
    for(let i = sarasasAtbul.length - 1; i >= 0; i--){
        zodisM += sarasasAtbul[i]
    }

    console.log(zodisM)

    console.log('---------------')

// 17. Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas = 
// ‘samivamargorP’  atskiras raides vieną po kitos 

let ŽodisAtbulas = 'samivamargorP';

for (let i = 0; i < ŽodisAtbulas.length; i++) {
    console.log(ŽodisAtbulas[i]);  
}






console.log('---------------')

// 18. Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi 
// iš 7, papildomai į consolę yra išvedamas žodis ‘lucky’ 
for(let i = 1; i <= 100; i++){
    if(i % 7 === 0){    
        console.log(`${i} lucky`)
    }else {
        console.log(i)
    }

}




console.log('---------------')

// 19. Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo 
// Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16) 
let kart2 = [2, 3, 6, 8]
for (let i = 0; i < kart2.length; i++){
    console.log(kart2[i] * 2)
}


console.log('---------------')
// 20. Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestų 
// visus skaičius, kurie yra mažesni už 100 
let DaugSkaičių = [2, 14, 10, 1000, 503, 8, 0]
for(let i = 0; i < DaugSkaičių.length; i++){
    if(DaugSkaičių[i] < 100){   
        console.log(DaugSkaičių[i]);

    }
}


console.log('---------------')
// 21. Parašykite for ciklą, kuris apskaičiuotų kiek raidžių a yra žodyje abrakadabra 
let zodis4 = 'abrakadabra';
let kiekYraA = 0;  

for (let i = 0; i < zodis4.length; i++) {
    if (zodis4[i] === 'a') {  
        kiekYraA++;  
    }
}

console.log(`zdije yra a skaicius raidziu ${kiekYraA}`);  

console.log('---------------')

// 22. Parašykite for ciklą, kuris išvestų, kokios būtų sąrašo PridėsiuSkaičių [2, 8, 88, 14] 
// elementų reikšmės, jei prie kiekvieno elemento pridėtume dvejetą. 

let prideti = [2, 8, 88, 14];

for (let i = 0; i < prideti.length; i++) {
    console.log(prideti[i] + 2);
}


// 23. Parašykite for ciklą, kuris suskaičiuotų kiek žodyje Nebeprisikiškiakopūstėliaudavome 
// yra raidžių e 
let zodis5 = 'Nebeprisikiškiakopūstėliaudavome';
let kiekYraE = 0;  

for (let i = 0; i < zodis5.length; i++) {
    if (zodis5[i] === 'e') {  
        kiekYraE++;  
    }
}

console.log(`zdije yra e skaicius raidziu ${kiekYraE}`);  



// 24. Parašykite for ciklą, kuris į consolę išvestų kiekvieną žodžio 
// Nebeprisikiškiakopūstėliaudavome e raidę, ir parašytų, kurioje žodžio vietoje ji yra: 
// PVZ: Žodžiui Keletą būtų išvedama: 
// e raidė yra 2 vietoje 
// e raidė yra 4 vietoje 
// 25. Parašykite for ciklą, kuris išvestų kokia kintamojo let Lobis = 150 reikšmė būtų, jei 
// mes iš jo atimtume reikšmes nuo 20 iki 15. Į consolę išveskite kaip mažėja turtas.


//1. Parašykite funkciją, kuri grąžina dviejų skaičių sumą.
function suma20(a, b) {
    return a + b;
}

console.log(suma20(5, 3));
console.log('---------------')

// 2. Parašykite funkciją, kuri grąžina dviejų skaičių skirtumą. 

function skirtumas(a, b) {
    return a - b; 
}

console.log(skirtumas(8, 3)); 
console.log('---------------')

// 3. Parašykite funkciją, kuri grąžina dviejų skaičių sandaugą. 
function sandauga(a, b) {
    return a * b; 
}

console.log(sandauga(4, 5)); 
console.log('---------------')

// 4. Parašykite funkciją, kuri grąžina dviejų skaičių dalybą. 
function dalyba(a, b) {
    return a / b; 
}

console.log(dalyba(4, 5)); 
console.log('---------------')

// 5. Parašykite funkciją, kuri grąžina dviejų skaičių vidurkį.

function vidurkis(a, b){
    return (a + b) / 2;
}
console.log(vidurkis(2, 10))
console.log('---------------')
// 6. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas. 
function teigemas(a){
    return a > 0;
}
console.log(teigemas(2))
console.log(teigemas(-2))
console.log(teigemas(0))
console.log('---------------')
// 7. Parašykite funkciją, kuri patikrina, ar skaičius yra lyginis. 
function lyginis(a){
    return a % 2 == 0;
}
console.log(lyginis(2))
console.log(lyginis(1))


console.log('---------------')
// 8. Parašykite funkciją, kuri patikrina, ar skaičius yra nelyginis. 
function nelyginis(a){
    return a % 2 == 1;
}
console.log(nelyginis(2))
console.log(nelyginis(1))
console.log('---------------')
// 9. Parašykite funkciją, kuri patikrina, ar skaičius dalijasi iš 5 be liekanos. 
function dalijasi5(a){
    return a % 5 == 0;
}
console.log(nelyginis(15))
console.log(nelyginis(12))
console.log('---------------')
// 10. Parašykite funkciją, kuri patikrina, ar skaičius yra lygus 100.
function ar100(a){
    return a === 100;
} 
console.log(ar100(100))
console.log(ar100(101))
console.log('---------------')
// 11. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 10. 
function ar10(a){
    return a <= 10;
} 
console.log(ar10(11))
console.log(ar10(10))
console.log('---------------')
// 12. Parašykite funkciją, kuri grąžina didesnį iš dviejų skaičių. 
function didesnis(a,b){
    if(a > b){
        return a;
    }else {
        return b;
    }

    }

console.log(didesnis(12, 13))
console.log(didesnis(12, 2))
console.log(didesnis(12, 28))
console.log('---------------')

// 13. Parašykite funkciją, kuri grąžina mažesnį iš dviejų skaičių. 
function mazesnis(a,b){
    if (a < b){
        return a;
    }else {
        return b;
    }
}
console.log(mazesnis(12,6))
console.log(mazesnis(22,15))
console.log('---------------')

// 14. Parašykite funkciją, kuri patikrina, ar trys skaičiai yra vienodi. 
function vienodi(a,b,c){
    if(a === b && b == c){
        return 'vienodi'
    } else{
        return 'nevienodi'
    }
}
console.log(vienodi(1,1,1))
console.log(vienodi(1,1,2))
console.log(vienodi(1,2,1))
console.log(vienodi(2,1,1))
console.log('---------------')

// 15. Parašykite funkciją, kuri patikrina, ar du skaičiai yra lygūs. 
function lygus(a, b){
    if (a == b){
        return 'lygus'
    }else {
        return 'nelygus'
    }
}
console.log(lygus(2,2))
console.log('---------------')

// 16. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 1 ir 10. 
function tarp(a){
    if(a >= 1 && a <=10){
        return `${a}yra tarp 1 ir 10 intervale`
    }else{
        return `${a}nera tarp 1 ir 10 intervale`
    }
}
console.log(tarp(10))
console.log(tarp(11))
console.log(tarp(-1))
console.log('---------------')


// 17. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 50 ir 100. 
function tarp50(a){
    if (a >= 50 && a <=100){
        return `${a} yra intervale`
    } else {
        return `${a} nera intervale`
    }
}
console.log(tarp50(66))
console.log(tarp50(101))
console.log(tarp50(49))
console.log('---------------')

// 18. Parašykite funkciją, kuri patikrina, ar skaičius yra neigiamas. 
function neigemas(a){
    if(a < 0){
        return `${a} skaicius neigemas`
    } else{
        return `${a} skaicius teigemas`
    }
}
console.log(neigemas(-1))
console.log(neigemas(1))
console.log('---------------')
// 19. Parašykite funkciją, kuri grąžina „Teigiamas“ arba „Neigiamas“ priklausomai nuo 
// skaičiaus, kurį nusiunčiate funkcijai. 
function neigemas(a){
    if(a > 0){
        return `${a} skaicius Teigemas`
    } else{
        return `${a} skaicius Neigemas`
    }
}
console.log(neigemas(-1))
console.log(neigemas(1))

console.log('---------------')


// 20. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 18 (pvz., patikrinimas, 
// ar žmogus pilnametis). 
function pilnametis(a){
    if(a > 18){
        return `${a}zmogus pilnametis`
    } else {
        return 'nepilnametis'
    }
}
console.log(pilnametis(19))
console.log(pilnametis(18))


console.log('---------------')


// 21. Parašykite funkciją, kuri patikrina, ar perduotas žodis yra „labas“. 
function labas(a){
    if(a == 'labas'){
        return 'perduotas zodis yra labas'
    }else{
        return 'ne labas'
    }

    
}

console.log(labas('labas'))
console.log(labas('laba'))
console.log('---------------')
// 22. Parašykite funkciją, kuri patikrina, ar žodis yra ilgesnis nei 5 simboliai.
function ilgesnis5(a){
    if(a.length > 5){
        return "ilgesnis nei 5"
    }else{
        return 'trumpesnis nei 5'
    }
} 
console.log(ilgesnis5('labas as krabas'))
console.log(ilgesnis5('lab'))
console.log('---------------')
// 23. Parašykite funkciją, kuri grąžina pirmąją perduoto žodžio raidę. 
function pirmaR(a){
    return a[0]
}
console.log(pirmaR('Labas'))
console.log('---------------')

// 24. Parašykite funkciją, kuri grąžina paskutinę perduoto žodžio raidę. 


function paskutine(a){
    return a[4]
}
console.log(paskutine('Labas'))



console.log('------arba---------')

function paskutine(a) {
    return a[a.length - 1];  
}

console.log(paskutine('Labas'));

console.log('---------------')


// 25. Parašykite funkciją, kuri patikrina, ar žodis prasideda raide „A“. 
function prasidedaA(a){
    if(a[0] === `A`){
        return `Prasideda A`
    } else {
        return `neprasideda A`
    }
}
console.log(prasidedaA('Ananasas'))
console.log(prasidedaA('bananas'))

console.log('---------------')

// 26. Parašykite funkciją, kuri grąžina žodžio ilgį. 
function ilgisZ(a){
    return a.length
}
console.log(ilgisZ('labas'))
console.log(ilgisZ('pasikiskekopusteleudamasis'))
console.log(ilgisZ('1234'))
console.log('---------------')
// 27. Parašykite funkciją, kuri grąžina „Ilgas“ arba „Trumpas“, priklausomai nuo žodžio 
// ilgio. Ilgas žodis yra 7 simbolių ilgio arba didesnis, o trumpas yra 6 simbolių ilgio arba 
// trumpesnis 
function zodzioIlgis(a){
    if(a.length >= 6){
        return 'ilgas zodis'
    }else{
        return 'trumpas'
    }
}
console.log(zodzioIlgis('labas as krabas'))
console.log(zodzioIlgis('pran'))

console.log('---------------')

// 28. Parašykite funkciją, kuri patikrina, ar du žodžiai yra vienodi. 
function vienodiZo(a,b){
    if(a === b){
        return 'vienodi'
    }else{
        return 'nevienodi'
    }
}
console.log(vienodiZo('labas','labas'))
console.log(vienodiZo('labas','krabas'))
console.log('---------------')
// 29. Parašykite funkciją, kuri grąžina „Diena“ arba „Naktis“, priklausomai nuo perduotos 
// valandos (0–23). 
function zodzioIlgis(a){
    if(a >= 7 && a <= 18){
        return 'diena'
    }else{
        return 'naktis'
    }
}
console.log(zodzioIlgis(23))
console.log(zodzioIlgis(12))

console.log('---------------')



// 30. Parašykite vieną funkciją, kuri patikrina skaičiaus vertę, ir jęi: 
// a. Skaičius yra teigiamas, išveda į console ‘esu teigiamas’ 
// b. Skaičius yra neigiamas, išveda į console ‘esu neigiamas’ 
// c. Skaičius yra nulis, išveda į console ‘esu nulis’ 
// d. Skaičius yra didesnis už 100, išveda ‘didžiulis skaičius’ 
// e. Jei skaičius nėra didesnis už 100, išveda ‘esu mažiukas
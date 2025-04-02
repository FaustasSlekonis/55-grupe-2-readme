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
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

const miestaiV = ['Kaunas', 89.6,'Klaipėda', 307.3,'Šiauliai', 214.1,'Panevėžys', 120.6, 'Alytus', 66.0, 'Marijampolė', 161.8, 'Jonava', 97.9,'Jonava', 97.9, 'Tauragė', 254.5, 'Utena', 124.5, 'Kėdainiai', 137.4];

function kurToliausiai(miestas, greitis, laikas){
    let maxAts = 0;
    let kelias = greitis * laikas
    for(let i = 0; i < miestas.length; i+=2){
        console.log(miestaiV[i]);
        if(miestaiV[i+1] <= kelias && miestaiV[i+1] > maxAts){
            maxAts = miestaiV[i+1];
            maxAts = i;
        }
    }
    console.log(miestaiV[maxAts] + ' ' + miestaiV[maxAts+1]);
}
kurToliausiai(miestaiV, 80, 2)


function arSpesim(miestai, miestas, laikas){
    for(let i = 0; i <miestai.length; i+=2){
        if(miestai[i] === miestas){
            if (miestai[i+1]/laikas<= 120){
                console.log('spesim' + miestai[i+1]/laikas)
            }
        }
        else{
            console.log('miesto neradau')
        }
    }
}
arSpesim(miestaiV, 'Panevėžys')

//1. užd. Padarykite funkciją, kuriai perdavus vieną iš (akmuo, popierius, šulinys) reikšmių, 
//kompiuteris su jumi sužaistų vaskiči raundą ir išvestų rezultatą į console. Kompiuterio 
//pasirinkimai turi būti atsitiktiniai. 

function playGame(playerChoice) {
    const options = ['akmuo', 'popierius', 'šulinys'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    console.log(`Jūs pasirinkote: ${playerChoice}`);
    console.log(`Kompiuteris pasirinko: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        console.log('Lygiosios!');
    } else if (
        (playerChoice === 'akmuo' && computerChoice === 'šulinys') ||
        (playerChoice === 'popierius' && computerChoice === 'akmuo') ||
        (playerChoice === 'šulinys' && computerChoice === 'popierius')
    ) {
        console.log('Laimėjote!');
    } else {
        console.log('Pralaimėjote!');
    }
}


playGame('akmuo')



// 1. Parašykite funkciją, kuri išvestų skaičiaus faktorialą 
function faktorialas(n) {
    let fakt = 1;
    for (let i = 1; i <= n; i++) {
        fakt *= i;
    }
    console.log(n + "! = " + fakt);
}


console.log(faktorialas(5));





// 2. Parašykite funkciją, kuri apskaičiuotų kiek kartų tam tikra raidė pasikartojo žodyje arba 
// sakinyje 
function raidėsKiekis(sakinys, raide) {
    let skaicius = 0;

    sakinys = sakinys.toLowerCase();
    raide = raide.toLowerCase();


    for (let i = 0; i < sakinys.length; i++) {
        if (sakinys[i] === raide) {
            skaicius++;
        }
    }

    return skaicius;
}


let sakinys = "Kokia yra Tavo mėgstama raide?";
let raide = "a";
let rezultatas = raidėsKiekis(sakinys, raide);
console.log(`Raidė '${raide}' pasikartoja ${rezultatas} kartus.`);






// 3. Padarykite funkciją, kuri grąžintų visus skaičiaus 3 kartotinius nuo 1 iki 50 
function gauti3Kartotinius() {
    let kartotiniai = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0) {
            kartotiniai.push(i);
        }
    }
    return kartotiniai;
}


console.log(gauti3Kartotinius());
// 4. Parašykite funkciją, kuri patikrintų ar duotas žodis yra palindromas 
function arPalindromas(zodis) {
  
    zodis = zodis.toLowerCase().replace(/\s/g, '');

    let apverstas = zodis.split('').reverse().join('');

 
    return zodis === apverstas;
}


console.log(arPalindromas("akava"));      
console.log(arPalindromas("obuolys"));      
console.log(arPalindromas("Savas"));        
console.log(arPalindromas("Kėdė"));


// 5. Parašyk funkciją, kuri suskaičiuoja kiek balsių yra žodyje 
function skaiciuotiBalses(zodis) {
    let balses = ['a', 'ą', 'e', 'ę', 'ė', 'i', 'y', 'o', 'u', 'ų', 'ū'];
    let kiekis = 0;

    zodis = zodis.toLowerCase();

    for (let i = 0; i < zodis.length; i++) {
        if (balses.includes(zodis[i])) {
            kiekis++;
        }
    }

    return kiekis;
}


console.log(skaiciuotiBalses("Pavasaris"));
// 6. Sukurk funkciją, kuri visus tarpus tekste pakeičia pabraukimais (underscore) 
// 7. Sukurk funkciją, kuri padvigubina visus skaičius masyve 
// 8. Sukurk funkciją, kuri suranda ilgiausią žodį sakinyje 
// 9. Funkcija, kuri išrikiuoja žodžius pagal ilgį didėjančia tvarka 
// 10. Funkcija, kuri grąžina pirmą skaičių masyve, kuris dalinasi iš 7 
// 11. Funkcija, kuri priima masyvą vardų ir grąžina tik tuos, kurie prasideda „A“ raide 
// 12. Funkcija, kuri turi sąraše rasti skaičių, kuris jame kartojasi daugiau nei vieną kartą 
// 13. Sukurk funkciją, kuri grąžins visus duoto sąrašo skaičius, kurie yra tarp dviejų nurodytų 
// reikšmių ([2, 5, 36, 8, 15, 6] masyvui nurodžius 5 20 intervalą, bus grąžinama [5, 8, 15, 
// 6] ) 
// 14. Parašykite funkciją, kuri iš žodžių sąrašo išrinktų ir grąžintų tik tuos žodžius, kuriuose 
// yra raidė e 




// 1. Count how many vowels are in a string
function countVowels(str) {
    const vowels = 'aeiouyEIAOUY';
    let count = 0;
    for(let char of str)
    {
        if(vowels.includes(char))
        {
            count++;
        }
    }
    return count
  }

  console.log(countVowels("Labas Vakaras"))
  
  // 2. Reverse a string
  function reverseString(str) {
//     const raides = str.split('')
//    // console.log(raides)
//     let atvirkstinis = '';
//     for (let i  = raides.length - 1; i>=0; i--)
//     {
//         atvirkstinis +=raides[i]
//     }
//     return atvirkstinis;

    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("Ananasas"))

  // 3. Capitalize the first letter of each word in a sentence
  function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  console.log(capitalizeWords("tu esi vienaragio fėja"))
  
  // 4. Check if a string is a palindrome
  function isPalindrome(str) {
    const cleaned = str.toLowerCase();
    // if(cleaned === cleaned.split('').reverse().join(''))
    // {
    //     return 'zodis yra palindromas';
    // }
    // else 
    // {
    //     return 'zodis ne palindromas';
    // }
    return cleaned === cleaned.split('').reverse().join('')
  }

  console.log(isPalindrome('Eyes'))
  
  // 5. Replace all spaces in a string with underscores
  function replaceSpaces(str) {
   return str.replaceAll(' ', '_');//
  }

  console.log(replaceSpaces("didelis namas yra gražus ir aukštas"));
  
  // 6. Count how many times a specific character appears in a string
  function countChar(str, char) {
    let count = 0;
    for(let c of str)
    {
        if(c === char) 
        {
            count++;
        }
    }
    return count;
  }

  console.log(countChar("ravajava", 'a'))
  
  // 7. Remove all digits from a string
  function removeDigits(str) {
   return str.replace(/[0-9]/g, '');
  }

  console.log (removeDigits("viens1 du2 trys3!"))
  
  // 8. Extract only letters from a string
  function onlyLetters(str) {
    return str.replace(/[^a-zA-Z]/g,'');
  }
  
  console.log(onlyLetters("Apelsinas,1234!"))

  // 9. Find the longest word in a sentence
  function longestWord(sentence) {
    
    const zodziai = sentence.split(" ");
    let maxlen=0;
    let Zmax = '';

    for(zodis in zodziai)
    {
        zodziai[zodis] = zodziai[zodis].replace(/[^a-zA-Z]/g,'');
        if(zodziai[zodis].length>maxlen)
        {
            Zmax = zodziai[zodis];
            maxlen = zodziai[zodis].length
        }
    }
    return Zmax;
    //sentence.split(' ').reduce((a, b) => a.length >= b.length ? a : b);
  }

  console.log(longestWord("labas rytas Lietuva, as esu Gabija"))

  
  // 11. Replace all vowels in a string with "*"
  function maskVowels(str) {
    return str.replace(/[aeiouyAEIOUY]/g, '*')
  }

  console.log(maskVowels("Apelsinas"));
  
  // 12. Trim whitespace from both sides of a string
  function trimString(str) {
    return str.trim();
  }

  console.log(trimString("           akla "))
  
  // 13. Convert a sentence to kebab-case
  function toKebabCase(str) {
    //return str.toLowerCase().replaceAll(" ", "-")
    return str.toLowerCase().replaceAll(/ /g, "-")
  }
  
   console.log(toKebabCase("vienas js nd darbas"))



  // 16. Count how many words are in a sentence
  function wordCount(sentence) {
    return sentence.trim().split(' ').length;
  }
  console.log(wordCount("labas vienas du"))

  // 17. Repeat a string n times
  function repeatString(str, n) {
    return str.repeat(n);
  }

  console.log(repeatString("abc", 3))

  console.clear()
 
  console.log("------------------------------------------------------------")

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////// 14. Convert a string to camelCase

function toCamelCase(str) {
    const words = str.split(' ');
    let CCase = '';
    for(let i = 0; i<words.length; i++)
    {
        if(i===0)
        {
            CCase += words[i].toLowerCase()
        }
        else
        {
            CCase+=words[i].charAt(0).toUpperCase();
            CCase+=words[i].slice(1).toLowerCase();
        }
    }
    return CCase
}

  console.log(toCamelCase("vienas js nd darbas"))

//////////////// 15. Check if a string contains only numbers
function isOnlyNumbers(str) {
    const numbers = '0123456789'
    for(char in str)
    {
        if(numbers.includes(str[char])===false)
        {
            return false;
        }  
    }
    return true;
    }
    console.log(isOnlyNumbers("1vienas123"))


  
  
  // 18. Check if two strings are anagrams
  function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize (str2)    
  }

  console.log(areAnagrams("avis", "savi"))
  
  // 19. Shorten a sentence to a max length and add "..."
  function truncate(str, maxLength) {
    if(str.length<maxLength)
    {
        return str + "...";
    }
    else
    {
        return str.slice(0, maxLength) + "...";
    }
  }

  console.log(truncate("pomidoras", 4))
  
  // 20. Swap the case of every letter
  function swapCase(str) {
    const raides = str.split('');
    let zodis = '';
    for(i in raides)
    {
        if(raides[i]===raides[i].toLowerCase())
        {
            zodis +=raides[i].toUpperCase();
        }
        else
        {
            zodis +=raides[i].toLowerCase();
        }
    }
    return zodis;
    //str.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
  }

  console.log(swapCase("LabaDiena"))
  
  /////// /////// 21. Remove duplicate letters from a string
//   function removeDuplicates(str) {
//             const letters = new Set (str.split(''))
//             return [...letters].join('');
//        }
// console.log(removeDuplicates("aabcb"))


  // 22. Remove punctuation from a sentence
  function removePunctuation(str) {
    return str.replace(/[.,!?;:-]/g, '');
  }

  console.log(removePunctuation("hi!... I say hello?"))
  
  // 23. Split a sentence into words
  function splitWords(str) {
    return str.trim().split(" ");
  }
   console.log(splitWords(" vienas du penki septyni"))


  // 24. Count uppercase letters
  function countUppercase(str) {
    let kiekis = str.match(/[A-Z]/g)
    return kiekis.length;
  }

  console.log(countUppercase("VienasDuTrysSeptyni"))

// 25. Check if word is included
function containsWord(sentence, word) {
    return sentence.toLowerCase().includes(word.toLowerCase());
  }

  console.log(containsWord("Vienas namas yra liudnas", 'namas'))
  
  // 26. Replace all instances of a word
function replaceAllWords(str, target, replacement) {
    return str.split(target).join(replacement)   
}

console.log(replaceAllWords("Tomas yra ponas bajoras. Tomas raudonas kaip pomidoras", "Tomas", "Jonas"))

 // 32. Mask all but last 4 characters
 function maskString(str) {
    return str.slice(-4).padStart(str.length, '*')
  }
console.log(maskString("Pomidoras"))

  // 33. Capitalize every second letter
  function capitalizeEverySecond(str) {
    const raides = str.split('');
    let zodis= ''
    for(let i = 0; i < str.length; i++ )
    {
        if(i%2===0)
        {
            zodis+=raides[i].toUpperCase();
        }
        else
        {
            zodis+=raides[i].toLowerCase();
        }
    }
    return zodis;
  }
  console.log(capitalizeEverySecond("apelsinas mandarinas"))
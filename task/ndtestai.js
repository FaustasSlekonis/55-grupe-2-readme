function textsize(text){
    if (text.length === 0){
    return `sarasas tuscias`;
    }if (text.length < 10){
        return `sarasas trumpesnis negu 10 simboliu`
    }
    
    if (text.length >= 10 && text.length < 20){
        return `islesnis zodis negu 10 simboliu maziau uz 20 sudarytas is ${text.length}`

    }
    if(text.length > 20){
        return `ilgas sakinys sudarytas is ${text.length} simboliu`
    }



}
console.log(textsize(''));
console.log(textsize('sdasd'));
console.log(textsize('sdassdadsssd'));
console.log(textsize('sdaddsadsdasdadsadadsdsadasd'));
console.clear();

function daugyba(skaicius1, skaicius2){
    if(typeof skaicius1 !== "number"){
        return `turi buti skaicius`
    }if(typeof skaicius2 !== "number"){
        return "turi buti skaicius"
    }
   return skaicius1 * skaicius2
}


console.log(daugyba(8,9))
console.log(daugyba(-8, 9))
console.log(daugyba(8, -9))
console.log(daugyba(0, 9))
console.log(daugyba(`labas`, 9))
console.log(daugyba(10, "9"))





function tusciafunkcija(text){
    if(text.length === 0)
        return `false`;
    if(text.length > 0){
        return `true`;
    }

}
console.log(tusciafunkcija(""))
console.log(tusciafunkcija("sddasd"))

console.log('------------------------------')

const tuscias = []
if( tuscias.length === 0){
    console.log('tuscias tekstas')
}else {
    console.log('ne tuscias tekstas')
}

console.log('------------------------------')
const array = [1,-2,3,-4]

if (array[0] >= 0 || array[1] >= 0 || array[2] >= 0 || array[3] >= 0 || array[4] >= 0 ){
    console.log('sarase yra teigemas skaiciu')
} else {
    console.log('sarasas tik is neigemu')
}

console.log('------------------------------')


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

    console.log('------------------------------')
    const sarasas2 = [3, 5, -2] 
    let minusas = false;

    for(let i = 0; i < sarasas2.length; i++){
        if (sarasas2[i] < 0){
            minusas = true;
            break;
        }
    }
        if(minusas){
            console.log("sarase yra -")
        }else{
            console.log("sarase nera -")
        }

        console.log('------------------------------')


        for(let i = 0; i < 5; i++){
            console.log(i)
        }



        console.log('------------------------------')




        for (let n = 0; n <= 10; n++){
            console.log(n)
        
            for(let i = 0; i <= 10; i++){
                console.log(`${n} * ${i} = ${n * i}`)
            }
        }


        console.log('------------------------------')


        const list = [1, 5 ,6 ,8, 7]
        let sum2 = 6

        for(let i = 0; i < list.length; i++){
            
           console.log(`${i} ---->${list[i]} `)
           sum2 += list[i]
        }

        console.log(sum2)

        console.log('------------------------------')


        const names = ['arnas', 'petras', 'jonas', 'maryte']
        let v = 0;

        for(let i = 0; i < names.length; i++){
            console.log(`${i} studento vardas yra ${names[i]}`)
            
        }


        console.log('------------------------------')

        
        const names1 = ['arnas', 'petras', 'jonasjonaitis', 'maryte']
        let b = 0;

        for(let i = 0; i < names1.length; i++){
            const names = names1[i]
            console.log(`studento vardas yra "${names1[i]}" jis yra sudarytas is "${names.length}" sudarytas is raidziu`)
            
        }

        console.log('------------------------------')


        function didziausiasSkaiciusSarase(sarasas) {
            // Patikriname, ar perduotas kintamasis yra sąrašas
            if (!Array.isArray(sarasas)) {
                return "Pateikta netinkamo tipo reikšmė.";
            }
            
            // Patikriname, ar sąrašas nėra tuščias
            if (sarasas.length === 0) {
                return "Pateiktas sąrašas negali būti tuščias.";
            }
        
            // Pateikiame pradines reikšmes
            let didziausias = sarasas[0]; 
        
            // Pereiname per visą sąrašą ir surandame didžiausią skaičių
            for (let i = 1; i < sarasas.length; i++) {
                if (sarasas[i] > didziausias) {
                    didziausias = sarasas[i];
                }
            }
        
            // Gražiname didžiausią skaičių
            return didziausias;
        }
        
        // Testavimas
        console.log(didziausiasSkaiciusSarase([1])); 
        console.log(didziausiasSkaiciusSarase([1, 2, 3])); 
        console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
        console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66])); 
        console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8])); 
        console.log(didziausiasSkaiciusSarase("pomidoras"));
        console.log(didziausiasSkaiciusSarase([])); 




        function isrinktiRaides(tekstas, zingsnis) {

            if (typeof tekstas !== 'string') {
                return "Pirmasis kintamasis yra netinkamo tipo.";
            }

            if (tekstas === "" || tekstas.length > 100) {
                return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
            }
        

            if (typeof zingsnis !== 'number') {
                return "Antrasis kintamasis yra netinkamo tipo.";
            }
        

            if (zingsnis <= 0) {
                return "Antrasis kintamasis turi būti didesnis už nulį.";
            }
        
  
            if (zingsnis > tekstas.length) {
                return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";
            }
        

            let rezultatas = "";
            for (let i = zingsnis - 1; i < tekstas.length; i += zingsnis) {
                rezultatas += tekstas[i];
            }
        
        
            return rezultatas;
        }

        console.log(isrinktiRaides("abcdefg", 2)); 
        console.log(isrinktiRaides("abcdefghijkl", 3)); 
        console.log(isrinktiRaides("abc", 0)); 
        console.log(isrinktiRaides("abc", 4));
        console.log(isrinktiRaides(1561, 2)); 

        console.clear();



        function positiveSum(start, end) {
            let sum = 0
            for (let i = start; i <= end; i++){
                sum += i;
            }
            return sum
        }


        const skaiciai11 = [1,2,];

 function addNum (sk){
    return (sk[0] + sk[1] + sk[2]);
 }

 function tellNum  (sk)
 {
    console.log(sk[0]);
 }
console.log(addNum(skaiciai11));
console.clear();

function positiveSum(sarasas5) {
    let sum = 0;  

    for (let i = 0; i < sarasas5.length; i++) {
        if (sarasas5[i] > 0) {  
            sum += sarasas5[i]; 
        }
    }

    return sum; 
}

console.log(positiveSum([5, 2 ,6 ,9]))
console.log(positiveSum([-5, 2 ,-6 ,9]))
console.log(positiveSum([5, 12 ,-16 ,9]))
console.log(positiveSum([5, 2 ,-6 ,-9]))



function positiveSum(arr) {
    let sum = 0;  

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {  
            sum += arr[i]; 
        }
    }

    return sum; 
}

console.log(positiveSum([5, 2 ,6 ,9]))
console.log(positiveSum([-5, 2 ,-6 ,9]))
console.log(positiveSum([5, 12 ,-16 ,9]))
console.log(positiveSum([5, 2 ,-6 ,-9]))

console.log('----------------------------------------')


const target = 6;
let current_count = 5;  
let steps = 0;


for (let i = current_count; i < target; i++) {
    steps = steps + 1;
}for (let i = target; i < current_count; i++) {
    steps = steps + 1;
}


console.log(steps)


console.log('---------------------------------------')
//kiek bus skrebuciu jei yra 6 vietos ir idesime 5, 12 , 6


function countToasts(current_count) {
    const sixToast = 6;
    let steps = 0;

for (let i = current_count; i < sixToast; i++) {
    steps = steps + 1;
}for (let i = sixToast; i < current_count; i++) {
    steps = steps + 1;
}
     return steps; 
}

console.log(countToasts(5));
console.log(countToasts(12));
console.log(countToasts(6)); 


//    ReferenceError: sixToast is not defined
 //   at Context.<anonymous> (test.js:26:10)
//  at process.processImmediate (node:internal/timers:471:21)
function countToasts(current_count) {
    const sixToast = 6;
    let steps = 0;

for (let i = current_count; i < sixToast; i++) {
    steps = steps + 1;
}for (let i = sixToast; i < current_count; i++) {
    steps = steps + 1;
}
     return steps; 
}


function sixToast(kiekis) {
    const maxVietos = 6;
    let a = 0;

    if (kiekis < maxVietos) {
        a = maxVietos - kiekis;
    } else if (kiekis > maxVietos) {
        a = kiekis - maxVietos; 
    }

    return a;
}
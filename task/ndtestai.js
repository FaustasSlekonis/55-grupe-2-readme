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
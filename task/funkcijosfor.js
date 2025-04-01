let tekstas = 'labai geras daiktas yra televizorius aš su juo galiu matyti jus'




//for ciklas suskaičiuoti raidėms.


function raidziuSkaiciuokle (zodis, raide )
{
    let sumaS = 0;
    for (let i = 0; i < zodis.length; i++)
        {
            if (zodis[i]===raide)
            {
                sumaS+=1;
            }
        }
    return sumaS;
}


console.log(raidziuSkaiciuokle (tekstas, 'a'));

const balses = ['a', 'e', 'i', 'o', 'u']

let DaugiausiaiRaides = 0;
let MaxRaide = '';

for (let i = 0; i < balses.length; i++)
{
    console.log('raidė: ' + balses[i] + ' pasitaiko: ' +raidziuSkaiciuokle(tekstas, balses[i]) + ' kartus.');

    if (raidziuSkaiciuokle(tekstas, balses[i]) > DaugiausiaiRaides)
    {
        DaugiausiaiRaides = raidziuSkaiciuokle(tekstas, balses[i])
        MaxRaide = balses[i];
    }
}

console.log("Kadangi raidžių " + MaxRaide + " yra daugiausiai, reikia užsakyti " + DaugiausiaiRaides + " raidžių rinkinius");


console.clear()













//Užduotis: atvirukų gamintojas nori tam tikras atviruko raides užklijuoti blizgančių raidžių lipdukais.
//Padėkite gamintojui paskaičiuoti, kiek raidžių lipdukų reikės jam nusipirkti.
//Kas bus, jei atvirukų gamintojas norės visas balses išpuošti lipdukais?




let atvirukoTekstas = 'labai geras daiktas yra televizorius aš su juo galiu matyti jus';
let atvirukoRaide = 'a';
let atvirukoSuma = 0;



function AtvirukoLipdukai (Raide)
{
    atvirukoSuma = 0;
    for (let i = 0; i <atvirukoTekstas.length; i++)
    {
        if(atvirukoTekstas[i] === Raide)
            {
                atvirukoSuma += 1;
            }
            
    }

    return atvirukoSuma;
}



const AtvirukoBalses = ['a', 'e', 'o', 'u', 'i', 't', 'z', 'g'];

for (let i = 0; i < AtvirukoBalses.length; i++)
{
    console.log("Raidė " + AtvirukoBalses[i] + " pasikartoja " + AtvirukoLipdukai(AtvirukoBalses[i]))
}








console.clear()







//Noriu rasti, kaip dažnai natūraliame tekste pasitaiko žodžių su tam tikra raide. Noriu rašyti tekstą tol
// kol surasiu pirmąsias n norimų raidžių


let manoraide = 'i'
let tekstasilgas = 'kazin kas tokio idomaus gali buti programavime. Daug dalykų, galbūt, tik reikia juos atrasti.'
let rastosraides = 0
let norimaskiekis = 4
let einamastekstas = '';


for (let i = 0; rastosraides < norimaskiekis; i++)
{
    einamastekstas += tekstasilgas[i];
    if (tekstasilgas[i] === manoraide)
    {
        rastosraides += 1;
    }
    if (i === tekstasilgas.length -1)
    {
        rastosraides = 4
    }
}

console.log(einamastekstas)




const Mokinys1 = ['Tadas', 8 , 9 ,10, 4, 7 ];
const Mokinys2 = ['Rima', 8 , 9 ,10, 4, 7 ];
const Mokinys3 = ['Gabija', 3 , 3 , 3, 4, 4 ];

function MokintioVidurkis (mokinys)
{
    console.log('mokynio vardas: ' + mokinys[0])
    let vidurkis = (mokinys[1]+mokinys[2]+mokinys[3]+mokinys[4]+mokinys[5])/5
    if(vidurkis>3,5)
    {
        console.log(mokinys[0] + ' Islaike. jo/s vidurkis: ' + vidurkis);
    }
    else 
    {
        let vidurkisNaujas = ((vidurkis*5)+10)/6
        console.log(mokinys[0] + 'Neislaike. Jo/s dabartinis vidurkis: ' + vidurkis);
        console.log(vidurkisNaujas)
        if(vidurkisNaujas>=3.5)
        {
            console.log(mokinys[0] + 'Islaikytu kursa jei gautu viena desimtuka');
        }
    }
    
}

MokintioVidurkis(Mokinys1)
MokintioVidurkis(Mokinys2)
MokintioVidurkis(Mokinys3)

console.clear();

// Sukuriame mokinių sąrašus
const mokinys11 = ["Jonas", 8, 7, 9, 6, 5];
const mokinys12 = ["Petras", 4, 5, 6, 5, 4];
const mokinys13 = ["Ona", 10, 9, 10, 9, 10];
const mokinys14 = ["Ieva", 6, 7, 8, 6, 7];
const mokinys15 = ["Mantas", 3, 4, 5, 4, 3];
const mokinys16 = ["Rasa", 9, 8, 7, 8, 9];

// Funkcija mokinio suvestinei
function mokinioSuvestine(mokinys) {
    const vardas = mokinys[0];
    const pazymiai = mokinys.slice(1);
    const vidurkis = pazymiai.reduce((sum, paz) => sum + paz, 0) / pazymiai.length;

    console.log(`Mokinys: ${vardas}`);
    console.log(`Vidurkis: ${vidurkis.toFixed(2)}`);

    if (vidurkis >= 5) {
        console.log("Mokinys išlaikė kursą.");
    } else {
        console.log("Mokinys neišlaikė kurso.");
        const naujasVidurkis = (pazymiai.reduce((sum, paz) => sum + paz, 0) + 10) / (pazymiai.length + 1);
        if (naujasVidurkis >= 5) {
            console.log("Mokinys galėtų pasitaisyti gavęs vieną gerą įvertį.");
        } else {
            console.log("Net ir gavęs vieną gerą įvertį, mokinys neišlaikytų kurso.");
        }
    }
    console.log("------------");
}
// Testuojame funkciją su visais mokiniais
mokinioSuvestine(mokinys11);
mokinioSuvestine(mokinys12);
mokinioSuvestine(mokinys13);
mokinioSuvestine(mokinys14);
mokinioSuvestine(mokinys15);
mokinioSuvestine(mokinys16);


// Sukuriame filmų sąrašus
const filmas1 = ["Inception", "Sci-Fi", 9];
const filmas2 = ["Titanic", "Drama", 8];
const filmas3 = ["Avengers", "Action", 7];
const filmas4 = ["Interstellar", "Sci-Fi", 10];
const filmas5 = ["The Godfather", "Crime", 9];

// Mėgstamas žanras ir minimalus įvertis
const megstamasZanras = "Sci-Fi";
const minimalusIvertis = 8;

// Funkcija filmų rekomendacijai
function filmuRekomendacija(filmai, zanras, ivertis) {
    const tinkamiFilmai = filmai.filter(filmas => filmas[1] === zanras && filmas[2] >= ivertis);

    if (tinkamiFilmai.length > 0) {
        console.log("Rekomenduojami filmai:");
        tinkamiFilmai.forEach(filmas => console.log(`- ${filmas[0]} (${filmas[1]}, įvertis: ${filmas[2]})`));
    } else {
        console.log("Nėra filmų, atitinkančių jūsų kriterijus.");
    }
}

// Testuojame funkciją
filmuRekomendacija([filmas1, filmas2, filmas3, filmas4, filmas5], megstamasZanras, minimalusIvertis);
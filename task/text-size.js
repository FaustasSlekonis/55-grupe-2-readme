/*
Reikalinga funkcija, kuri gauna teksta, kuri grazina rezultata, priklausomai nuo teksto ilgio.
- jei tuscias: "Tuscias tekstas."
- jei maziau 10 simbliu: "Trumpas tekstas is N} simboliu."
- jei maziau 20 simbliu: "Tekstas is N simboliu."
- jei ilgesnis: "Ilgas tekstas is N simboliu."
*/

function textSize(text) {
    if (text.lengt === 0){
        return `tuscias tekstas.`;
    }
    if (text.lengt < 10){
        return `trumpas tekstas in ${text.lengt} simboliu.`;
    }
        if(text.lengt < 20){
        return `tekstas is ${text.lengt} simboliu.`;
        }


    return `Ilgas tektas is ${text.length} raidziu.`;
}

console.log(textSize(''));
console.log(textSize('Labas'));
console.log(textSize('Labanaktis'));
console.log(textSize('LAbas rytas, lietuva ka tu?'));
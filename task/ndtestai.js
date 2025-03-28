function textsize(text){
    if (text.length === 0){
    return `sarasas tuscias`;
    }

    if (text.length <= 10 ){
         return `sarasas is mazai raidziu sudarytas is ${text.length} raidziu` 
    }
    if(text.length <= 20){
        return `sakinys yra ${text} ir jis yra ilgas nes sudarytas is ${text.length}`
    }
    return `labai igas textas ${text} sudarytas is ${text.length}`
}
console.log(textsize(''));
console.log(textsize('sdasd'));
console.log(textsize('sdassdadasd'));
console.log(textsize('sdad'));
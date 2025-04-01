function updateLight(current) {
    if (current === `green`){
      return `yellow`;
  }else if  (current == 'yellow'){
    return "red";
  }else if  (current == "red"){
    return `green`;
  }

}
console.log(updateLight("green"));
console.log(updateLight("yellow"));

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1




function correctText(text) {
    let correctedText = ''; 
    
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
      
        if (char === '5') {
            correctedText += 'S';
        } else if (char === '0') {
            correctedText += 'O';
        } else if (char === '1') {
            correctedText += 'I';
        } else {
            correctedText += char;
        }
    }
    
    return correctedText;
}
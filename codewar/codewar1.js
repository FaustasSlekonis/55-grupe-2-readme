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

console.clear();

let raide = '';
function reverseWords(str){
    for (let i = str - 1; i >= 0; i--){
    raide += str[i];
  }
  return raide;
}
  console.log(reverseWords('labas nelabas'))



  function check(a, x) {
    for (let i = 0; i < a.length; i++){
      if (a[i] == x){
        return true;
      }

    }
    return false;
  }

  console.log(check([66, 101], 66));
  console.log(check([66, 101], 62));

  function solution(a, b) {
    let short = '';
    let long = '';
  
    
    if (a.length < b.length) {
      short = a;
      long = b;
    } else {
      short = b;
      long = a;
    }
  
    
    return short + long + short;
  }



  console.log(solution('45', '1'), '1451');
  console.log(solution('13', '200'), '1320013');
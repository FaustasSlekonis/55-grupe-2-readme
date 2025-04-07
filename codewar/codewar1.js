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




  function whatday(num) { 
    if(num === 1){
      return 'Sunday'
    } if(num === 2){
      return 'Monday'
    } if(num === 3 ){
      return 'Tuesday'
    }if(num === 4 ){
      return "Wednesday"
    } if(num === 5 ){
      return "Thursday"
    } if(num === 6 ){
      return "Friday"
    } if(num === 7 ){
      return "Saturday"
    } if (num < 1 || num > 7){
      return 'Wrong, please enter a number between 1 and 7'
    }
  }

  console.log(whatday(8))




  function arrayMadness(a, b) {

    let sumSquaresA = 0;
    let sumCubesB = 0;
  

    for (let i = 0; i < a.length; i++) {
      sumSquaresA += a[i] ** 2;
    }
  

    for (let i = 0; i < b.length; i++) {
      sumCubesB += b[i] ** 3;
    }
  

    if (sumSquaresA > sumCubesB) {
      return true;
    } else {
      return false;
    }
  }
  

  console.log(arrayMadness([4,5,6],[1,2,3]), true);
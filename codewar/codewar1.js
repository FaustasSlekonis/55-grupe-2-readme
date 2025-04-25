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


  function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000;
  }
  
  console.log(past(0, 1, 1), 61000);

  function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(summation(8));



  function maps(x) {
    let result = [];
    for (let i = 0; i < x.length; i++) {
      result.push(x[i] * 2);
    }
    return result;
  }
  
  console.log(maps([1, 2, 3]));



  function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }



  function tripleTrouble(one, two, three){
    let result = '';
    
    for (let i = 0; i < one.length; i++) {
      result += (one[i] + two[i] + three[i]);
    }
    
    return result;
   }




   function hero(bullets, dragons){
    return bullets >= dragons * 2
  }






  function paperwork(n, m) {
    if (n > 0 && m > 0) {
        return n * m;
    } else {
        return 0;
    }
}




function checkAlive (health) {
  if (health > 0) {
    return true
  } else {
    return false
  }
}



function myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else {
    return a % b + b % a;
  }
}


console.log(myFirstKata(3,5),(3 % 5 + 5 % 3));
console.log(myFirstKata("hello",3),false);
console.log(myFirstKata(67,"bye"),false);
console.log(myFirstKata(true,true),false);
console.log(myFirstKata(314,107),(107 % 314 + 314 % 107));
console.log(myFirstKata(19483,9),(9 % 19483 + 19483 % 9));


function correctPolishLetters(str) {
  return str
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ł/g, 'l')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ź/g, 'z')
    .replace(/ż/g, 'z');
}


function strCount(str, letter) {
  let count = 0;
  for (let char of str) {
    if (char === letter) {
      count++;
    }
  }
  return count;
}

console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('',      'z'), 0);



function differenceInAges(ages) {
  const youngest = Math.min(...ages);
  const oldest = Math.max(...ages);
  const difference = oldest - youngest;
  return [youngest, oldest, difference];
}


console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);



function getDrinkByProfession(param) {
  const profession = param.toLowerCase();

  if (profession === "jabroni") return "Patron Tequila";
  else if (profession === "school counselor") return "Anything with Alcohol";
  else if (profession === "programmer") return "Hipster Craft Beer";
  else if (profession === "bike gang member") return "Moonshine";
  else if (profession === "politician") return "Your tax dollars";
  else if (profession === "rapper") return "Cristal";
  else return "Beer";
}


console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");
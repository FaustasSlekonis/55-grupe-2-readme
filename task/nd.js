function raidziu(n1, n2){
 const kazkas = n1 +n2
 return `${n1} + ${n2} = ${kazkas}`
}

const a = raidziu(2,2);
console.log(a)

const b = raidziu(7,5);
console.log(b)

const c = raidziu(10,20);
console.log(c)
console.log('Ar mergina eis i pasimatinma su vaikinu')

const Grazus = true;
const turtinas = true;
const Nesiprausia = false

console.log(Grazus && turtinas || Nesiprausia)
console.clear();


let sarasas = [1,2,3,4,5,6]

let arYra3 = false;

if(sarasas[0] === 3 ){
    arYra3 = true;
} 


if(sarasas[1] === 3 ){
     arYra3 = true;
} 

if(sarasas[2] === 3 ){
     arYra3 = true;
} 

if(sarasas[3] === 3 ){
     arYra3 = true;
} 

if(sarasas[4] === 3 ){
     arYra3 = true;
} 
if(arYra3 === true){
    console.log('sarase yra skaicius 3')
}else{
    console.log('sarase nera skaiciaus 3')
}
return 


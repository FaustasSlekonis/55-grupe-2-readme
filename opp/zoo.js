class animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.legcount = 4;
        this.isHungry = true;
        this.species = "unknown";
    }
    feed()
    {
        if(this.isHungry === true)
        {

           this.isHungry = false;
           return "aciu uz pietus"
            
        }
        else {
            return "as nesu alkanas"; 
        }

   
    }
}


class Lion extends animal{
    constructor(name, age)
    {
        super(name, age)
        this.legcount = 4;
        this.species = "liutas";
    }

}
class Penguin extends animal{
    constructor(name, age)
    {
        super(name, age)
        this.legcount = 2;
        this.species = "pingvinas";
    }

}


const simba = new Lion ("Simba", 4)
console.log(simba.name);
console.log(simba.isHungry);
console.log(simba.feed());
console.log(simba.isHungry);
console.log(simba.feed());


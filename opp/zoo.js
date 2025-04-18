class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.legCount = 0;
        this.isHungry = true;
        this.species = "unknown";
        this.energy = 40;
    }

    feed(food) {
        if (this.isHungry && this.wantedFood === food) {
            this.isHungry = false;
            this.energy = Math.min(this.energy + 10, 40);
            return `${this.name} pavalgė ir jaučiasi geriau.`;
        } else if (this.isHungry) {
            return `${this.name} nenori šito maisto.`;
        } else {
            return `${this.name} šiuo metu nealkanas.`;
        }
    }

    sleep() {
        this.energy = Math.min(this.energy + 20, 40);
        console.log(`${this.name} pamiegojo. Energija: ${this.energy}`);
    }

    hi() {
        if (this.energy < 5) {
            console.log(`${this.name} per daug pavargęs pasisveikinti.`);
            return;
        }
        this.energy -= 5;
        console.log(`Labas! Aš ${this.name}.`);
    }

    balsas() {
        return "...";
    }

    happyBirthday() {
        this.age++;
        console.log(`Su gimtadieniu, ${this.name}! Tortas iš ${this.wantedFood} paruoštas.`);
    }
}

class Lion extends Animal {
    constructor(name, age) {
        super(name, age);
        this.legCount = 4;
        this.species = "liutas";
        this.wantedFood = "meat";
    }

    balsas() {
        return "Roar!";
    }
}

class Penguin extends Animal {
    constructor(name, age) {
        super(name, age);
        this.legCount = 2;
        this.wingCount = 2;
        this.isHungry = false;
        this.species = "pingvinas";
        this.wantedFood = "fish";
    }

    balsas() {
        return "Niaaa!";
    }

    triukas(word) {
        if (this.energy < 10) {
            console.log(`${this.name} per pavargęs triukui.`);
            return;
        }
        this.energy -= 10;

        if (["hi", "hello", "labas"].includes(word)) {
            console.log(`${this.name} paplojo, pamojuoja ir sako: "Labas! Aš ${this.name}!"`);
        } else {
            console.log(`${this.name} paplojo ir pamojuoja.`);
        }
    }
}

class Flamingo extends Animal {
    constructor(name, age) {
        super(name, age);
        this.legCount = 2;
        this.wingCount = 2;
        this.isHungry = false;
        this.species = "flamingas";
        this.wantedFood = "shrimp";
    }

    balsas() {
        return "Krrah!";
    }
}

class Monkey extends Animal {
    constructor(name, age) {
        super(name, age);
        this.legCount = 2;
        this.wantedFood = "banana";
        this.species = "beždžionė";
    }

    balsas() {
        return "Oo oo aa aa!";
    }

    triukas(a, b) {
        if (this.energy < 10) {
            console.log(`${this.name} neturi jėgų daryti triuko.`);
            return;
        }

        if (a > 5 || b > 5) {
            console.log(`${this.name} supyko ir metė purvą.`);
        } else {
            const suma = a + b;
            console.log(`${this.name} parodė ${suma} pirštų.`);
        }

        this.energy -= 10;
    }
}

class Elephant extends Animal {
    constructor(name, age) {
        super(name, age);
        this.legCount = 4;
        this.wantedFood = "grass";
        this.species = "dramblys";
    }

    balsas() {
        return "Paaaa!";
    }

    triukas(orai) {
        if (this.energy < 10) {
            console.log(`${this.name} neturi jėgų triukui.`);
            return;
        }

        this.energy -= 10;

        if (orai === "saulėta") {
            console.log(`${this.name} papurškė vandenį – atsirado vaivorykštė.`);
        } else if (orai === "debesuota") {
            console.log(`${this.name} papurškė vandenį.`);
        } else if (orai === "šalta") {
            console.log(`${this.name} papurškė šaltu vandeniu – ne itin malonu...`);
        } else {
            console.log(`${this.name} purškia vandenį.`);
        }  }
}


const george = new Monkey("George", 5);
const dumbo = new Elephant("Dumbo", 12);
const skipper = new Penguin("Skipper", 7);

george.hi();
george.triukas(3, 2);
george.triukas(7, 2); 
george.sleep(); 
console.log("George energija:", george.energy);

dumbo.triukas("saulėta");
dumbo.hi();
console.log(dumbo.feed("grass"));
console.log("Dumbo energija:", dumbo.energy);

skipper.triukas("hi");
skipper.triukas("wow");
skipper.happyBirthday();
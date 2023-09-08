// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage (damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
        
    }

    battleCry () {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{

    receiveDamage (damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
        
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let randomVikingArrayPositon = Math.floor(Math.random() * this.vikingArmy.length);
        let attackingViking = this.vikingArmy[randomVikingArrayPositon]

        let randomSaxonArrayPosition = Math.floor(Math.random() * this.saxonArmy.length);
        let attackedSaxon = this.saxonArmy[randomSaxonArrayPosition];

        let retval = attackedSaxon.receiveDamage(attackingViking.attack());

        if(attackedSaxon.health <= 0 ) {
            this.saxonArmy.splice(randomSaxonArrayPosition, 1 )
        }
        
        return retval; 
    }

    saxonAttack() {

        let randomVikingArrayPositon = Math.floor(Math.random() * this.vikingArmy.length);
        let attackedViking = this.vikingArmy[randomVikingArrayPositon]

        let randomSaxonArrayPosition = Math.floor(Math.random() * this.saxonArmy.length);
        let attackingSaxon = this.saxonArmy[randomSaxonArrayPosition];

        let retval = attackedViking.receiveDamage(attackingSaxon.attack());

        if(attackedViking.health <= 0 ) {
            this.vikingArmy.splice(randomSaxonArrayPosition, 1 )
        }
        
        return retval; 
    }

    showStatus() {
        if( this.saxonArmy.length < 1 ) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length < 1) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

    battle( attacker , attacked) {
        let retval = attacked.receiveDamage(attacker.attack());
    }


}


let viking1 = new Viking("Eugen", 100, 50);
let saxon1 = new Saxon(100, 10);




let war1 = new War();

war1.addViking(viking1);
war1.addSaxon(saxon1);

console.log(war1.saxonArmy);
console.log(war1.vikingArmy)

console.log(war1.saxonAttack());
console.log(war1.saxonAttack());


console.log(war1.saxonArmy);
console.log(war1.vikingArmy)
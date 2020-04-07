
// Setup a constructor to take name and age
// Get description 

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${ this.name }!`;
    }
    getDescription() {
        return `Hi. ${ this.name } is ${this.age} years old.`
    }

}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasLocation() {
        return !!this.homeLocation;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasLocation()){
            description += ` Their home addres is ${this.homeLocation}`;
        }
        return description;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }

}

const me = new Traveller('Nikolay Raykov', 23, 'Plovdiv');
console.log(me.getGreeting());

const other = new Traveller(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());
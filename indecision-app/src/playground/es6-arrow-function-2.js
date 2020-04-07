// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a+b;
}
console.log(add(55, 1));

// this keyword - no longer bound

const user = { 
    name: 'Niki',
    cities: ['Plovdiv', 'Sofia', 'Bremen'],
    printPlacesLived() { 
        return this.cities.map((city) => this.name + ' has lived in' + city + '!');
    }
};
console.log(user.printPlacesLived());

//Challenge area

const multiplier = {
    numbers: [4, 6, 3],
    multiplyBy: 7,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
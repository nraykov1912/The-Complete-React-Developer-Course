var nameVar = 'Niko';
var nameVar = 'Cari';
console.log('nameVar', nameVar);

let nameLet = 'Opi';
nameLet = 'Ogre';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    let petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping

const fullName = 'Jen Raykov';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
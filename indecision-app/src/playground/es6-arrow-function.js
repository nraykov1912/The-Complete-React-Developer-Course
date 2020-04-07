// function square(x) {
//     return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x*x;

// console.log(squareArrow(8));

// User arrow functions
// getFirstName('Mike Smith') -> 'Mike'
// Create regular arrow function
// Create arrow function using the shorthand syntax

const getFirstNameReg = (fullName) => {
    return (fullName.split(' ')[0]);
};
console.log(getFirstNameReg('Nikolay Raykov'));

const getFirstNameShort = (fullName) => fullName.split(' ')[0];
console.log(getFirstNameShort('Niki Raaykov'));
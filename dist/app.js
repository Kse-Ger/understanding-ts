"use strict";
let usersName = 'Maximilian';
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', event => {
    let namef = 'Max';
    console.log(event);
});
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const [hobby1, hobby2] = hobbies;
const addd = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = addd(5, 10, 2, 3.7);
console.log('Resulttt', addedNumbers);
const person = {
    firstName: "Ksenija",
    age: 27
};
const { firstName: namesss, age } = person;
console.log(namesss, age);
//# sourceMappingURL=app.js.map
let logged; // for variables it is okay not to define a tape

function sendAnalytics(data: string) { // for parameters in ts you have to define a type
    console.log(data)
    logged = true;
}

sendAnalytics("The data");

let usersName = 'Maximilian'; // global variable

//console.log(userName);

const button = document.querySelector('button'); // exclamation mark says that the developer knows 
// that the button is there and there will not be null
button?.addEventListener('click', event => {
    let namef = 'Max'; // local variable
    console.log(event)
})

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking']

activeHobbies.push(...hobbies); // spread operator to push whole hobbies array to actoveHobbies array

const [hobby1, hobby2] = hobbies; // destructuring array of hobbies. The original array is not changed

const addd = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0)
}
const addedNumbers = addd(5, 10, 2, 3.7);
console.log('Resulttt', addedNumbers)

const person = {
    firstName: "Ksenija",
    age: 27
};

const {firstName: namesss, age} = person

console.log(namesss, age)
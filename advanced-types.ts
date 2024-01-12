type Admin = {
    name: string;
    privilages: string [];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privilages: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b:number): number;    // function overloads
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') { // Type Guard
        return a.toString() + b.toString()
    }
    return a+b
}

const result = add('Max', ' Schwarz');
result.split(' ');

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
     job: { title: 'CEO', description: 'My own company' }
}

console.log(fetchedUserData?.job?.title) // optional chaining (if check)

const userInput = '';
const storedData = userInput ?? 'DEFAULT' // the fallback is used only for null or undefined, empty string will be kept

console.log(storedData)

/* type UnknonEmployee = Employee | Admin;

function printEmployeeInfo (emp: UnknonEmployee) {
    console.log('Name: '+ emp.name)
    if ('privilaes' in emp) { // Type Guard
        console.log('Privilages: '+emp.privilaes)
    }
}

printEmployeeInfo(e1)

class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving truck...')
    }
    loadCargo(amount: number) {
        console.log('Loading cargo ... ' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { // Type Guard
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird'; // useful pattern for interfaces
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed
    }
    console.log('Moving with speed: ' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10});

//const paragraph = <HTMLInputElement>document.getElementById('user-input')!; // Casting
const paragraph = document.getElementById('user-input'); // ! 0 will never be null

//paragraph.value = "Hi there!";

if(paragraph) {
    (paragraph as HTMLInputElement).value = "Hi  there!" // as HTMLInputElement assumes it is not null, so check manueally
}

interface ErrorContainer {
    //id: string; // can't set it to a number anymore
    [prop: string]: string // strings, numbers, characters
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
} */
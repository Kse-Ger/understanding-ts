"use strict";
const e1 = {
    name: 'Max',
    privilages: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privilaes' in emp) {
        console.log('Privilages: ' + emp.privilaes);
    }
}
printEmployeeInfo(e1);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ... ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving with speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
const paragraph = document.getElementById('user-input');
if (paragraph) {
    paragraph.value = "Hi  there!";
}
const errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
//# sourceMappingURL=app.js.map
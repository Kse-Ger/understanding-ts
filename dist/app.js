"use strict";
let add1;
add1 = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n, outName) {
        this.age = 27;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Lena');
let user2 = new Person('Lena', 'Jelena');
user1.greet('Hi there! I am');
//# sourceMappingURL=app.js.map
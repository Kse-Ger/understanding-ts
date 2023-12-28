/* interface Person { // can be same as type Person = {}. Interfaces can only be used to describe structure, type is more flexible. Interface is more clearer
    // Interface can be implemented by class
    name: string; // can't assign default value
    age: number;

    greet(phrase: string): void;
} */

interface AddFn {
    (a: number, b: number): number; // anonymous function
}

let add1: AddFn;

add1 = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name: string; // can't use private or public in interfaces
    outputName?: string; // optional property
}

interface Greetable extends Named{
    greet(phrase: string): void;
}

class Person implements Greetable { // can implement multiple interfaces
    name: string;
    outputName?: string;
    age = 27;

    constructor(n: string, outName?: string) {
        this.name = n;
    }
    
    greet(phrase: string) { // interfaces force classes that implement it to have same methods and properties as interface
        console.log(phrase + ' ' + this.name);
    }
} 

let user1: Greetable;
user1 = new Person('Lena')
let user2 = new Person('Lena', 'Jelena')
// user1.name = 'Ksenia'; returns error because name is readonly

user1.greet('Hi there! I am');
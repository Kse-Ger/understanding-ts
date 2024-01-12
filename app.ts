function Logger(logString: string) {
    console.log('LOGGER DECORATOR')
    return function(constructor: Function) {
       console.log(logString)
       console.log(constructor) 
    }
    
}

function WithTemplate(template: string, hookId: string) {  // Decorator Factory, is rendered only when object is instantiated
    console.log('TEMPLATE DECORATOR')
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) { // _: any - I know I get thos argument, but I won't use it
        return class extends originalConstructor {
            constructor(...args: any[]) { // extra logic that runs when the class is instantiated and not when it is defined!!
                super()
                console.log('Rendering template')
                const hookEl = document.getElementById(hookId)
                if (hookEl) {
                    hookEl.innerHTML = template
                    hookEl.querySelector('h1')!.textContent = this.name
                }
            }
        }
    }
}


@Logger('LOGGING')
@WithTemplate('<h1>My Person Object!</h1>', 'app') // Decorators are executed from bottom to top (first template, then logger)
class  Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object ...')
    }

}

const pers = new  Person()

console.log(pers)

// ---- Decorators that are on Methods and Accessors can return, decorators on properties and parameters, don't return (can return, but Typescript will ignore)

function Log(target: any, propertyName: string | Symbol) { // tarhet = prototype
    console.log('Property decorator')
    console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator')
    console.log(target)
    console.log(name)
    console.log(descriptor)
    
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator')
    console.log(target)
    console.log(name)
    console.log(position)
}

class Product {
    @Log // Decorators execute when you define class, not when you instantiate the Product (const p1 = new Product)
    title: string
    private _price: number

    @Log2
    set price(val: number) {
        if(val>0) {
          this._price = val  
        } else {
            throw new Error('Invalid price')
        }
        
    }

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price*(1+tax)
    }
}

class Printer {
    message = 'This works'

    showMessage() {
        console.log(this.message)
    }
} 

const p = new Printer()

const button = document.querySelector('button')!
button.addEventListener('click', p.showMessage)
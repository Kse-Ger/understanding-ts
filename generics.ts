const names: Array<string> = []; // Generic type

const promise: Promise<string> = new  Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!')
    }, 2000)
})

promise.then(data => {
    data.split(' ')
})

function merge<T extends Object, U>(objA: T, objB: U) { // T - any type, but different than U
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30}); // merge<{name: string, hobbies: string[]}, {age: number}>

console.log(mergedObj.age)

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'Got no value.';
    if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements'
    }
    return [element, descriptionText] // tuple 
}

console.log(countAndDescribe(''))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}

extractAndConvert({name: 'Max'}, 'name')

class DataStorage<T> { //  extends string | number | boolean - here either array of string or array of boolean or array of numbers 
    private data: T[] = []; // if was data: (string | number | boolean)[] means it can be mixed array; string[] | boolean[] | number[] later probleam to add item with certain type, with Generic type possible this structure

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getITems() {
        return [...this.data]
    }
}

const testStorage = new DataStorage<string>(); // can be also number
testStorage.addItem('Max')
testStorage.addItem('Manu')
testStorage.removeItem('Max')

const objStorage = new DataStorage<object>()
objStorage.addItem({name: 'Max'})
objStorage.addItem({name: 'Manu'})
objStorage.removeItem({name: 'Max'}) // removes last element of the array, as it can't identify index of object
console.log(objStorage.getITems())

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date):CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const namess: Readonly<string[]> = ['MAx', 'Anna']
// namess.push('Manu')  can't do it because it is readonly
// namess.pop()
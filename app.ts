// Classes, constructor, this.

class Department {
    static fiscalYear = 2022;
    // private id: string;
    // private name: string; // public are accessable outside of classes and is default
    protected employees: string[] = [] // protected only accessable within class, protected can be accessed also by classes that extend base class
    constructor(protected readonly id: string, public name: string) { // shortcut for initialization; readonly means it can't be change
        // this.name = n;
        // this.id = id;
        //console.log(this.fiscalYear) // static property can't be accessed from class
        console.log(Department.fiscalYear)
    }
    static createEmployee(name: string) {
        return {name: name}
    }
    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }
    addEmployee(employee: string) {
        // this.id = 'd2'; will give error becaus id is readonly
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department { // can inherit only from 1 class
    constructor(id: string, public admins: string[]) {
        super(id, 'IT'); // calls constructor of the base class, has to be called first
    }
}

class AccountingDepartment extends Department { 
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error( 'No report found')
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please add correct value')
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting'); 
        this.lastReport = reports[0];
    }

    describe(){
        console.log('Accounting Department ID = id '+ this.id)
    }

    addEmployee( name : string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name) // employees are private and can only be accessed by Department
    }
 
    addReport( text: string) {
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
    }
}

const employee1 = Department.createEmployee('Maxim');
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Max'])
it.addEmployee('MAx')
it.addEmployee('Manu')

Math.PI

// accounting.employees[2] = 'Anna'; Can't do it while employees are provate
it.printEmployeeInfo()
console.log(it)

const accounting = new AccountingDepartment('d1', [])
accounting.mostRecentReport = 'Year end report'; // Emplty string is falsy
accounting.addReport('Something went wrong')
console.log(accounting.mostRecentReport)
accounting.addEmployee('Max')
accounting.addEmployee('Manu')
accounting.printReports()
accounting.printEmployeeInfo()
// Classes, constructor, this.

abstract class Department {
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
    abstract describe(this: Department): void; // abstract works like override in java- abstract methods doesn't have logic in base class (void)

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

    describe() {
        console.log( 'IT Department id = ' + this.id)
    }
} 

class AccountingDepartment extends Department { 
    private lastReport: string;
    private static instance: AccountingDepartment;

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

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting'); 
        this.lastReport = reports[0];
    }

    static getInstance() {  // singleton design patter, thus there can't be multiple AccountingDepartments, only one Instance of it!
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe(){
        console.log('Accounting Department ID = '+ this.id)
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

const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = 'Year end report'; // Emplty string is falsy
accounting.addReport('Something went wrong')
console.log(accounting.mostRecentReport)
accounting.addEmployee('Max')
accounting.addEmployee('Manu')
accounting.printReports()
accounting.printEmployeeInfo()
accounting.describe()

const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2) // return the same instances
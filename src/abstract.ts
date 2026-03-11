abstract class Employee {
  constructor(
    private fname: string,
    private lname: string,
  ) {}
  abstract getSalary(): number;
  getFullname(): string {
    return `${this.fname} ${this.lname}`;
  }
  compensation(): string {
    return `${this.getFullname()} makes ${this.getSalary()} a month`;
  }
}

class Fulltime extends Employee {
  constructor(
    fname: string,
    lname: string,
    private salary: number,
  ) {
    super(fname, lname);
  }

  getSalary(): number {
    return this.salary;
  }
}
class Contractor extends Employee {
  constructor(
    fname: string,
    lname: string,
    private rate: number,
    private hours: number,
  ) {
    super(fname, lname);
  }
  getSalary(): number {
    return this.rate * this.hours;
  }
}
let john = new Fulltime("John", "David", 12000);
let jane = new Contractor("Jane", "Deborah", 100, 160);

console.log(john.compensation());
console.log(jane.compensation());

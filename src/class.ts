class Person {
  //   private name: string;
  //   private age: number;
  constructor(
    public name: string,
    public age: number,
  ) {
    // this.name = name;
    // this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name} you're ${this.age} years old.`);
  }
}
const p1 = new Person("Heaven", 22);
p1.greet();

// console.log(p1.name) // trying to access this property outside the class you'll get an error

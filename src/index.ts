console.log("Hello, TypeScript!");
let age: number = 21;
const name: string='Baraka'
const city = 'kigali'
if (age < 50) {
  age += 10;
  console.log(`Hello ${name} You are ${age} years old you live in ${city}.`);
}
const var7Array : (string | number | object)[] = [1, 'test', {a: 3}, 4, 5]
console.log(var7Array)

let skills : [string , number];
skills = ['Programming',455656434345]
console.log(skills)

let rgba : [number, number, number, number?]
rgba = [3,5,6]

// enums

enum Month {
  Jan,
  Feb,
  Mar,
  Ap
}

function isItSummer (mont: Month){
let isSummer :boolean;

switch(mont){
  case Month.Jan:
  case Month.Feb:
  case Month.Mar:
isSummer = true;
break
default:
  isSummer = false;

}
return isSummer;
}

console.log (isItSummer(Month.Feb))
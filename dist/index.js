"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello, TypeScript!");
let age = 21;
const name = 'Baraka';
const city = 'kigali';
if (age < 50) {
    age += 10;
    console.log(`Hello ${name} You are ${age} years old you live in ${city}.`);
}
const var7Array = [1, 'test', { a: 3 }, 4, 5];
console.log(var7Array);
let skills;
skills = ['Programming', 455656434345];
console.log(skills);
let rgba;
rgba = [3, 5, 6];
// enums
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Ap"] = 3] = "Ap";
})(Month || (Month = {}));
function isItSummer(mont) {
    let isSummer;
    switch (mont) {
        case Month.Jan:
        case Month.Feb:
        case Month.Mar:
            isSummer = true;
            break;
        default:
            isSummer = false;
    }
    return isSummer;
}
console.log(isItSummer(Month.Feb));
//# sourceMappingURL=index.js.map
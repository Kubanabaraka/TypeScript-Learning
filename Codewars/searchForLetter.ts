export function change(string: string): string {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const str = string.toLowerCase();
  let result: string = "";
  alphabets.map((letter) => {
    if (str.includes(letter)) {
      result += 1;
    } else {
      result += 0;
    }
  });
  return result;
}
console.log(change("a38898g"));

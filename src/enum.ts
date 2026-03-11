function combine(...rest: (string | number)[]): [number, string] {
  let total = 0;
  let str = "";

  rest.forEach((c) => {
    if (typeof c === "number") {
      total += c;
    } else if (typeof c === "string") {
      str += c;
    }
  });
  return [total, str];
}
console.log(combine(21, 4, 54, 6, 7.3, "h", "a", "p", "p", "y"));

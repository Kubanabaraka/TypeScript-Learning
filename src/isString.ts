function isString(value: any): value is string {
  return typeof value === "string";
}
const str: any = 4;
if (isString(str)) {
  console.log(str.toUpperCase());
}

export function partsSums(ls: number[]): number[] {
  let result: number[] = [];
  const leng: number = ls.length;
  const total: number = ls.reduce((a: number, b: number): number => a + b, 0);
  result.push(total);

  for (let i: number = 0; i < leng; i++) {
    ls.splice(0, 1);

    let total2 = ls.reduce((acc: number, num: number): number => acc + num, 0);
    result.push(total2);
  }
  return result;
}
console.log(partsSums([0, 1, 3, 6, 10]));

export function join(tokens: string | string[], glue?: string): string {
  if (typeof tokens === "string") {
    return tokens;
  } else {
    return tokens.join(glue);
  }
}

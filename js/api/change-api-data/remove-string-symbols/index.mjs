export function removeStringSymbol(string, symbol, replacement) {
   const regex = new RegExp(symbol, "g");
   let replacedString = string.replace(regex, replacement);
   return replacedString;
}

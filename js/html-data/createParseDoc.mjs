export function createParseDoc(element) {
   const parser = new DOMParser();
   const parseDocument = parser.parseFromString(`${element}`, "text/html");
   return parseDocument;
}

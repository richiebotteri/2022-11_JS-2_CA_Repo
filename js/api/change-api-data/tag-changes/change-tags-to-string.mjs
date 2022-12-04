import { removeStringSymbol } from "../remove-string-symbols/index.mjs";

export function changeTagsToString(tag) {
   if (typeof tag === "object") {
      const joinAsString = Object.keys(tag)
         .map((item) => {
            return tag[item];
         })
         .join(" ");

      return joinAsString.toLowerCase();
   } else {
      if (tag.includes(",")) {
         const newString = removeStringSymbol(tag, ",", " ");
         return newString.toLowerCase();
      } else {
         return tag.toLowerCase();
      }
   }
}

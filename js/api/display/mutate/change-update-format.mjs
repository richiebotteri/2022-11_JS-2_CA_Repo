import { createDate } from "./create-date.mjs";

export function changeUpdateFormat(date) {
   let result = "";
   if (date) {
      const newLocalDate = createDate(date);
      result = `<span class="fw-semibold">Updated: </span>${newLocalDate}`;
   }
   return result;
}

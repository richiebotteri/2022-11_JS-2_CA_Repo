import { createDate } from "./create-date.mjs";

export function changeCreatedFormat(date) {
   let result = "";
   if (date) {
      const newLocalDate = createDate(date);
      result = `<span class="fw-semibold">Created: </span>${newLocalDate}`;
   }
   return result;
}

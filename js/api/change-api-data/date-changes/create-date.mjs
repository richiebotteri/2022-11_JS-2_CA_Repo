export function createDate(date) {
   const newDate = new Date(date);
   const options = { weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
   return newDate.toLocaleDateString(undefined, options);
}

export function onlyShowRealUpdates(created, updated) {
   if (created !== updated) {
      return updated;
   }
}

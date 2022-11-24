// Save to local storage
export function saveItem(key, value) {
   sessionStorage.setItem(key, JSON.stringify(value));
}

// load local storage item
export function loadItem(key) {
   try {
      const storedValue = sessionStorage.getItem(key);
      return JSON.parse(storedValue);
   } catch {
      return null;
   }
}

// delete local storage item
export function deleteItem(key) {
   sessionStorage.removeItem(key);
}

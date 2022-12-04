// Save to local storage
export function saveItem(key, value) {
   const changeValue = value.toLowerCase().trim();
   localStorage.setItem(key, JSON.stringify(changeValue));
}

// load local storage item
export function loadItem(key) {
   try {
      const storedValue = localStorage.getItem(key);
      return JSON.parse(storedValue);
   } catch {
      return null;
   }
}

// delete local storage item
export function deleteItem(key) {
   localStorage.removeItem(key);
}

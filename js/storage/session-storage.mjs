// Save to session storage
export function saveSessionItem(key, value) {
   sessionStorage.setItem(key, JSON.stringify(value));
}

// load session storage item
export function loadSessionItem(key) {
   try {
      const storedValue = sessionStorage.getItem(key);
      return JSON.parse(storedValue);
   } catch {
      return null;
   }
}

// delete session storage item
export function deleteSessionItem(key) {
   sessionStorage.removeItem(key);
}

/**
 * Save value-item to localStorage
 * @export
 * @module
 * @param {string} key add string key
 * @param {*} value add any param type
 * @example
 *```js
 * //add an object to localStorage
 * const profile = {
 * userName: "tom",
 * email: "tom@example.com",
 * }
 *
 * //saves profile object to localStorage
 * //with the key "profile"
 * saveItem("profile", profile);
 *
 * //if value is an numberString
 * //it will be converted to a number value
 *```
 */
export function saveItem(key, value) {
   if (typeof value === "number") {
      localStorage.setItem(key, JSON.stringify(value));
   } else {
      localStorage.setItem(key, JSON.stringify(value));
   }
}

/**
 * Load value-item from localStorage
 * @export
 * @module
 * @param {string} key add string key from localStorage
 * @returns returns a javascript value, converted from JSON
 * @example
 *```js
 * //Load profile object from localStorage
 * //with the key "profile"
 * const profileObject = loadItem("profile");
 *
 * //console logging the profileObject
 * console.log(profileObject);
 *```
 */
// load local storage item
export function loadItem(key) {
   try {
      const storedValue = localStorage.getItem(key);
      return JSON.parse(storedValue);
   } catch {
      return null;
   }
}

/**
 * Delete value-item from sessionStorage
 * @export
 * @module
 * @param {string} key add string key from localStorage
 * @example
 * ```js
 * //adding a localStorage string key to the function will delete it
 * deleteItem("profile");
 * //This example deletes a key called "profile";
 *```
 */
// delete local storage item
export function deleteItem(key) {
   localStorage.removeItem(key);
}

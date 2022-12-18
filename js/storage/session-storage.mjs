/**
 * Save value-item to sessionStorage
 * @export
 * @module saveSessionItem
 * @param {string} key add string key
 * @param {*} value add any param type
 * @example
 *```js
 * //add an object to sessionStorage
 * const profile = {
 * userName: "tom",
 * email: "tom@example.com",
 * }
 *
 * //saves profile object to sessionStorage
 * //with the key "profile"
 * saveItem("profile", profile);
 *
 * //string-values will be converted to
 * //lowercase with no whitespace on each side
 *```
 */
export function saveSessionItem(key, value) {
   if (typeof value === "number" || "boolean") {
      sessionStorage.setItem(key, JSON.stringify(value));
   } else {
      const changeValue = value.toLowerCase().trim();
      sessionStorage.setItem(key, JSON.stringify(changeValue));
   }
}

/**
 *Load value-item from sessionStorage
 * @export
 * @module loadSessionItem
 * @param {string} key add string key from sessionStorage
 * @returns returns a javascript value, converted from JSON
 * @example
 *```js
 * //Load profile object from sessionStorage
 * //with the key "profile"
 * const profileObject = loadItem("profile");
 *
 * //console logging the profileObject
 * console.log(profileObject);
 *```
 */
export function loadSessionItem(key) {
   try {
      const storedValue = sessionStorage.getItem(key);
      return JSON.parse(storedValue);
   } catch {
      return null;
   }
}

/**
 * Delete value-item from sessionStorage
 * @export
 * @module deleteSessionItem
 * @param {string} key add string key from sessionStorage
 * @example
 * ```js
 * //adding a sessionStorage string key to the function will delete it
 * deleteItem("profile");
 * //This example deletes a key called "profile";
 *```
 */
export function deleteSessionItem(key) {
   sessionStorage.removeItem(key);
}

/*
@ encapturize localstorage 
*/
const store = window.localStorage;

class LocalStore {
  // Set
  public static set(key: string, value: any) {
    if (!store) return;
    let v = value;

    try {
      if (typeof value === 'object') {
        v = JSON.stringify(v);
      }
      store.setItem(key, v);
    } catch (error) {
      // error catching
    }
  }

  // Get original data
  public static get(key: string) {
    if (!store) return;
    return store.getItem(key);
  }

  // Get json data
  public static getToJson(key: string) {
    if (!store) return;
    const data = store.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        // error handles
      }
    }
    return null;
  }

  // Delete data
  public static remove(key: string) {
    if (!store) return;
    try {
      store.removeItem(key);
    } catch (error) {
      // error handles
    }
  }
}
export default LocalStore;

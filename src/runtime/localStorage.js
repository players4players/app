const memoryStorage = new Map();

function createMemoryLocalStorage() {
  return {
    getItem(key) {
      const normalizedKey = String(key);
      return memoryStorage.has(normalizedKey) ? memoryStorage.get(normalizedKey) : null;
    },
    setItem(key, value) {
      memoryStorage.set(String(key), String(value));
    },
    removeItem(key) {
      memoryStorage.delete(String(key));
    },
    clear() {
      memoryStorage.clear();
    },
  };
}

if (typeof globalThis.localStorage === 'undefined') {
  globalThis.localStorage = createMemoryLocalStorage();
}

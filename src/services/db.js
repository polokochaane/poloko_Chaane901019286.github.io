import initialData from "../database/db.json";

const STORAGE_KEY = "wingsCafeInventoryDB";

/** 📖 Read database from localStorage */
export const readDB = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { products: [], transactions: [] };
  } catch (err) {
    console.error("Error reading DB:", err);
    return { products: [], transactions: [] };
  }
};

/** ✍️ Write database to localStorage */
export const writeDB = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Error writing DB:", err);
  }
};

/** 🚀 Initialize DB (only once) */
export const initDB = () => {
  const db = readDB();
  if (db.products.length === 0) {
    writeDB(initialData);
  }
};

/** 🔄 Reset DB (clear and reload from db.json) */
export const resetDB = () => {
  writeDB(initialData);
  return initialData;
};

import { useState, useEffect } from 'react';

// function getStorageValue(key, defaultValue) {
//   // getting stored value
//   const saved = localStorage.getItem(key);
//   const initial = JSON.parse(saved);
//   return initial || defaultValue;
// }

// export const useLocalStorage = (key, defaultValue) => {
//   const [value, setValue] = useState(() => {
//     return getStorageValue(key, defaultValue);
//   });

//   useEffect(() => {
//     // storing input name
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// };

export function useLocalStorage(initialValue, key) {
  const getValue = () => {
    const storage = localStorage.getItem(key); // либо string or null ничего

    if (storage) {
      return JSON.parse(storage); // [] или {}
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

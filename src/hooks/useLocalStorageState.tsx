import React from "react";

export function useLocalStorageState(
  key: string,
  defaultValue: any,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState(() => {
    const localStorageValue = window.localStorage.getItem(key);
    if (localStorageValue) {
      return deserialize(localStorageValue);
    } else return defaultValue;
  });

  const prevKeyRef = React.useRef<string>();
  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(key);
      prevKeyRef.current = key;
    }
    window.localStorage.setItem(key, serialize(state));
  });

  return [state, setState];
}

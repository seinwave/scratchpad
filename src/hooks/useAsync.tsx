import React from "react";

interface StateObject {
  status: string;
  data: object | null;
  error: string | null;
}

type Action =
  | { type: "pending"; data: null; error: null }
  | { type: "resolved"; data: object | null; error: null }
  | { type: "rejected"; data: null; error: string }
  | { type: string; data: null; error: string };

function asyncReducer(state: StateObject, action: Action): StateObject {
  switch (action.type) {
    case "pending": {
      return { status: "pending", data: null, error: null };
    }
    case "resolved": {
      return { status: "resolved", data: action.data, error: null };
    }
    case "rejected": {
      return { status: "rejected", data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function useAsync(initialState: StateObject) {
  const [state, dispatch] = React.useReducer(asyncReducer, {
    status: "idle",
    data: null,
    error: null,
  });

  const run = React.useCallback(
    (promise) => {
      if (!promise) {
        return;
      }
      promise.then(
        (data: StateObject["data"]) => {
          dispatch({ type: "resolved", data, error: null });
        },
        (error: string) => {
          dispatch({ type: "rejected", data: null, error: error });
        }
      );
    },
    [dispatch]
  );

  return { ...state, run };
}

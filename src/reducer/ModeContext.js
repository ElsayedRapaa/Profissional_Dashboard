import { createContext, useContext, useReducer } from "react";

export const ModeContext = createContext();

export default function ModeContextProvider({
  initialState,
  reducer,
  children,
}) {
  const value = useReducer(reducer, initialState);
  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export const useDarkMode = () => useContext(ModeContext);

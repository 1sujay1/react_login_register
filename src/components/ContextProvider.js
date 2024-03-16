import React, { createContext } from "react";

export const MyContext = createContext();

function ContextProvider({ children }) {
  return (
    <MyContext.Provider value={{ name: "Welcome to Sujay's World" }}>
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;

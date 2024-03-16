import React, { useContext } from "react";
import { MyContext } from "./ContextProvider";

const Context = () => {
  const { name } = useContext(MyContext);
  return <div>{name}</div>;
};

export default Context;

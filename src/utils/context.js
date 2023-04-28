import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({
  userName: "",
  setUserName: () => {},
  // todo: si tu veux sauvegarder d'autres info sur toute ton app
  // tu fais pareil que pour userName
});

export const Ctx = ({ children }) => {
  const [userName, setUserName] = useState("");
  // pareil pour le useState

  // oublie pas de passer tes valeurs dans values en dessous
  const values = {
    userName,
    setUserName,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export function useCtx() {
  return useContext(Context);
}

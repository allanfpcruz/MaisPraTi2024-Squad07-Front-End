import { createContext, useState } from "react";

export const userContext = createContext()

export const UserProvider = ({children}) => {

  const [loggedUser, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  })

  const setLoggedUser = (userData) => {
    removeLoggedUser()
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  const removeLoggedUser = () => {
    if(loggedUser) {
      setUser(null)
      localStorage.removeItem("user");
    }
  }

  return(
    <userContext.Provider value={{ loggedUser, setLoggedUser, removeLoggedUser }}>
      {children}
    </userContext.Provider>
  )
}
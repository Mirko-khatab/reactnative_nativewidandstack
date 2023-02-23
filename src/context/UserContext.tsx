// react
import React, { createContext, useState, useEffect } from "react"
// react native
const UserContext = createContext({})

const UserProvider = ({ children }: any) => {
  useEffect(() => {}, [])

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}
export { UserContext, UserProvider }

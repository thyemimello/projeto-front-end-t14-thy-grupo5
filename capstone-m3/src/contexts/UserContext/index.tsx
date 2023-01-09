import React, { createContext, useState } from 'react'
import { iDefaultProviderProps } from './@types'

interface iUserContext {
    registerModal:boolean;
    setRegisterModal: React.Dispatch<React.SetStateAction<boolean>>
  }

export const UserContext = createContext({}as iUserContext)
function UserProvider({children}: iDefaultProviderProps) {
    const [registerModal, setRegisterModal] = useState(false)
  return (
    <UserContext.Provider value={{
        registerModal,
        setRegisterModal
    }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
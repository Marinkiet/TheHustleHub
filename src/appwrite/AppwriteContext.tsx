import { View, Text } from 'react-native'
import React, { FC, PropsWithChildren, createContext, useState } from 'react'
import AppwriteService from './service'

//for type saftey
type AppwriteContextType={
    appwrite:AppwriteService;
    isLoggedIn:boolean;
    setIsLoggedIn:(isLoggedIn:boolean)=>void
}

//create React Context pass it contexr types values
export const AppwriteContext = createContext<AppwriteContextType>({
    appwrite: new AppwriteService(),
    isLoggedIn:false,
    setIsLoggedIn:()=>{}
})

//provider
export const AppwriteProvider:FC<PropsWithChildren> = ({children}) => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const defaultValue = {
        appwrite: new AppwriteService(),
        isLoggedIn,
        setIsLoggedIn
    }
  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  )
}

export default AppwriteContext
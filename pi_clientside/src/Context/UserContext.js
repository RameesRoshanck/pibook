import {createContext, useState} from 'react'

export const UserAuthContext=createContext(null)


export default function Context({children}){
    const [authUser,setAuthUser]=useState(null)

    return(
        <UserAuthContext.Provider value={{authUser,setAuthUser}} >
               {children}
        </UserAuthContext.Provider>
    )
}

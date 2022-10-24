import React, { createContext, useContext } from 'react';


const laundryContext = createContext()

export function LaundryContextProvider({children}) {
  return (
    <laundryContext.Provider >
        {children}
    </laundryContext.Provider>
  )
}

export const useLaundryContext =()=>{
    return useContext(laundryContext)
}
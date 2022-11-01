import React, { createContext, useContext,useState } from 'react';


const laundryContext = createContext()

export function LaundryContextProvider({children}) {
  const [loadingInProgress, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [message,setMessage] = useState('');
  const [variant,setVariant] = useState('');

  const handleShow = (what,color) =>{ setShow(true);
  setMessage(what); setVariant(color)}
  const handleClose = () => setShow(false);

  return (
    <laundryContext.Provider value={{handleShow,handleClose,show,message,variant,loadingInProgress,setLoading}} >
        {children}
    </laundryContext.Provider>
  )
}

export const useLaundryContext =()=>{
    return useContext(laundryContext)
}
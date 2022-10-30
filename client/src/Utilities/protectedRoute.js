import React from "react";
import { Navigate} from "react-router-dom";
import { useUserAuth } from '../contexts/authContext';
import { useLaundryContext } from "../contexts/laundryContexts";

const ProtectedRoute = ({ children }) => {
  const {handleShow} = useLaundryContext()
  const { user } = useUserAuth();

  if (!user) {
    handleShow('Please Login To Continue',"red")
   return <Navigate to="/SignIn" />;
  }
  return children;
};

export default ProtectedRoute;
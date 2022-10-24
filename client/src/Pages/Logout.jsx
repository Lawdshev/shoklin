import React from 'react';
import { useUserAuth } from '../contexts/authContext';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';

function Logout() {
  const {user} = useUserAuth();
  const {logOut} = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
}

export default Logout;
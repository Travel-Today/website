import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {

  const {
    loginWithRedirect,
  } = useAuth0();


  return <button className="py-2 px-4 uppercase text-xs text-white font-normal border border-white rounded mr-4" onClick={() => loginWithRedirect()}>
      Log In
  </button>;
};

export default LoginButton;

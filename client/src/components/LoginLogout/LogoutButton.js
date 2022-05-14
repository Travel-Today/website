import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LogoutButton = (active) => {

  const {
    logout,
  } = useAuth0();


  return <button  className={classNames(
    active ? "bg-gray-100" : "",
    "block px-4 py-2 text-sm text-gray-700"
  )}
                     onClick={() => logout()}>
      Logout
  </button>;
};

export default LogoutButton;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authenticator } from "../../actions/auth";
function PrivateLayout({ children }) {
  /***
   * 1. List user events
   * 2. Every time user visit the privet pages
   *      clear the current user session time
   *      reset the session the event
   * 3. If use not active and session timed out? then logout user
   */

  let userSession; // user session timer will be stored
  let redirectTo = useNavigate(); // user path to navigate the user
  
  // 1. List user events
  const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
  ];

  useEffect(() => {
    //2. Every time user visit the privet pages reset the session the event
    Object.values(events).forEach((event) => {
      window.addEventListener(event, () => {
        resetSession();
        session();
      });
    });
  });

  const resetSession = () => {
    // clear the current user session time
    if (userSession) clearTimeout(userSession);
  };

  const session = () => {
    // Set or update user session time
    userSession = setTimeout(() => {
      resetSession(); // clear session
      Object.values(events).forEach((event) => {
        window.addEventListener(event, resetSession);
      });
      logoutUser(); // logout user
    }, 4 * 60 * 1000);
  };

  const logoutUser = () => {
    // clear stored data and send this user to login page
    localStorage.clear();
    redirectTo("/login");
  };

  return (
    <div>
      {children}
    </div>
  );
}

export default PrivateLayout;

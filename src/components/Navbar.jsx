import React, { useContext } from "react";
import { chatContext } from "../context/ChatProvider";
const Navbar = () => {
  // Iniciar context
  const { user, userSignIn, signOut } = useContext(chatContext);
  return (
    <div className="navbar navbar-light bg-light">
      <span className="navbar-brand">Chat</span>
      <div>
        {user.active ? (
          <button className="btn btn-outline-danger my-2" onClick={signOut}>
            Sign out
          </button>
        ) : (
          <button
            className="btn btn-outline-success my-2 mr-2"
            onClick={userSignIn}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import "./App.css";
import React from "react";
// Llamada a la variable inicializadora del context a usar.
import { chatContext } from "./context/ChatProvider";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
function App() {
  // Mediante desestructuración invocamos las variables globales del contextAPI (exportadas en su 'value') a usar.
  const { user, loading } = React.useContext(chatContext);
  React.useEffect(() => {
    console.log("loading is: ", loading);
    
  }, [loading]);
  return user !== null ? (
    <div className="App">
      <Navbar />
      <div>
        {loading && (
          <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {user.active ? (
          <div className="mt-2">
            <h3>Hello, {user.displayName}</h3> <Chat />
          </div>
        ) : (
          <div className="">
            <h3>No user found, please log In</h3>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div class="spinner-border text-info" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );
}

export default App;

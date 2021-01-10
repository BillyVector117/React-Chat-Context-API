import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
// Context API a usar (provider)
import ChatProvider from "./context/ChatProvider";

ReactDOM.render(
  <React.StrictMode>
    {/* El componente <App> tendra acceso a las variables del provider (contextAPI)*/}
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

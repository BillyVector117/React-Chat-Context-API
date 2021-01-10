import React, { useState, useEffect } from "react";
import { db, auth, provider } from "../firebase";

// Variable inicializadora que otros componentes usaran para acceder a los valores de este context
export const chatContext = React.createContext();
const ChatProvider = (props) => {
  // Valores a exportar:
  const userData = { uid: null, email: null, active: null }; // Initial data
  const [user, setUser] = useState(userData); // initial data to change user status
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  // Once completly loaded site, with useEffect detect active-user
  useEffect(() => {
    detectActiveProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Detect active user with Auth. methods
  const detectActiveProfile = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // If success login "active" changes to TRUE
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          active: true,
        });
        loadMessages(); // load all messages
        setLoading(false);
      } else {
        // If no users logged, the state "active" is FALSE
        setUser({ uid: null, email: null, active: false });
      }
    });
  };

  // SignIn using Google Provider
  const userSignIn = async () => {
    try {
      // Use auth method, and verify with Google Acc (provider initialized in database.js)
      await auth.signInWithPopup(provider);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  // SignOut using Auth methods
  const signOut = () => {
    auth.signOut();
  };
  // Read messages in realtime from "chat" collection
  const loadMessages = () => {
    // Read in realtime "chat" collection (for each new message onSnapshot auto-execute)
    db.collection("chat")
      .orderBy("createdAt")
      .onSnapshot((query) => {
        // For each document in "chat" get its data (complete)
        const arrayMessages = query.docs.map((item) => item.data());
        setMessage(arrayMessages); // mount in state each document data  in an array
      });
  };
  // add/set new messages in "chat" collection
  const addMessages = async (uidChat, inputText) => {
    // add messages in "chat" collection
    try {
      // Object clave are in firestore, the values are setted by argument function
      await db.collection("chat").add({
        createdAt: Date.now(),
        text: inputText,
        uid: uidChat,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // Se exportan los valores con 'value' (user: data cambiada del user, metodo iniciar sesión con Google, metodo cerrar sesión
    // message: todos los mensajes obtenidos de la colección "chat")
    <chatContext.Provider
      value={{ user, userSignIn, signOut, message, addMessages, loading }}
    >
      {props.children}
    </chatContext.Provider>
  );
};

export default ChatProvider;

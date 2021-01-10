import React, { useContext, useState } from "react";
import { chatContext } from "../context/ChatProvider";

const FormMessage = () => {
  const { addMessages, user } = useContext(chatContext);
  const [message, setMessage] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      console.log("empty field");
      return;
    }
    addMessages(user.uid, message); // Cada mensaje agregado, se ejecuta esta función la cual recibe el uid del user active mas el mensaje
    // Clean state
    setMessage("");
  };
  return (
    /* fixed-botton coloca el contenido en el inferior, agrupar input con otro contenido (botón send), padding de 3 px y fondo negro  */
    <form className="fixed-bottom input-group p-3 bg-dark mb-2 mt-5" onSubmit={add}>
      <input
        type="text"
        className="form-control"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      {/* form-control styling the input */}
      <div className="input-group-append">
        {/* append, add this content next to the input */}
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export default FormMessage;

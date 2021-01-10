import React, { useContext, useRef, useEffect } from "react";
import FormMessage from "./FormMessage";
import { chatContext } from "../context/ChatProvider";
const Chat = () => {
  const { message, user } = useContext(chatContext);
  const chatRef = useRef(null);

  useEffect(() => {
    // Función para colocar el scroll abajo (justo en el mensaje enviado/recibido)
    console.log(chatRef); // Para visualizar el alto del scroll, entonces el top heigh debe ser igual al heigh total
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [message]); // Hace esta comprobación en cada mensaje nuevo

  return (
    <div
      className="container mt-3 mb-2 px-2 w-75 border border-info py-3"
      style={{ height: "75vh", overflowY: "scroll", backgroundColor: "#eee" }}
      ref={chatRef}
    >
      {
        // mapea el array message, por cada el. si el uid del user es igual al uid del item significa que es el user primario
        message.map((item, index) =>
          user.uid === item.uid ? (
            // display-flex, contenido justificado al final (derecha) y margen inferior de 2px Usuario primario
            <div className="d-flex justify-content-end mb-2" key={index}>
              <h4>
                <span className="badge badge-pill badge-primary">
                  {item.text}
                </span>
              </h4>
            </div>
          ) : (
            // display-flex, contenido justificado al inicio (izquierda) y margen inferior de 2px Usuario secundario
            <div className="d-flex justify-content-start mb-2" key={index}>
              <span className="badge badge-pill badge-secondary">
                {item.text}
              </span>
            </div>
          )
        )
      }
      <FormMessage />
    </div>
  );
};

export default Chat;

import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../../context/ChatContext";
import BubbleMessageSent from "./bubble-message-sent";
import BubbleMessageReceived from "./bubble-message-received";

const Message = ({ message }) => {
  // const { currentUser } = useContext(AuthContext);
  const currentUser = {
    uid:'1'
  }
  // const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <>
      <div ref={ref}>
        {message.senderId === currentUser.uid ? (
          <>
            <BubbleMessageSent text={message.text} />
            {message.img && <img src={message.img} alt="" />}
          </>
        ) : (
          <>
            <BubbleMessageReceived text={message.text} />
            {message.img && <img src={message.img} alt="" />}
          </>
        )}
      </div>
    </>
  );
};

export default Message;

import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages, loading]);

  return (
    <div className="message_over px-4 flex-1 overflow-y-auto">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}

      {messages.map((message, idx) => {
        const isLastMessage = messages.length - 1 === idx;
        return (
          <div key={message._id} ref={isLastMessage ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        );
      })}
    </div>
  );
};

export default Messages;

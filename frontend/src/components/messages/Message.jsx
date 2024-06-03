import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profileImg = fromMe
    ? authUser?.profileImg
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";
 
  const isImageUrl = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };
   const isImage = isImageUrl(message.message);
   console.log(authUser)

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Profile" src={profileImg} />
        </div>
      </div>
      {
        isImage ? (
          <div className=" image_message  w-[300px] h-[400px]     rounded">
            <img  className="w-full h-full object-cover rounded" src={message.message} alt="message" />
          
        </div>
        ):(
          <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
          {message.message}
        </div>
        )
      }
     
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

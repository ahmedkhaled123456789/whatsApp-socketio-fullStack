import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa6";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = ({ open, setOpen }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  // Array of background photos
  //  const photos = [];

  // Select a random background from the photos array
  //  const background = photos[Math.floor(Math.random() * photos.length)];

  return (
    <div
      className={
        open
          ? "conversation_active flex flex-col justify-between w-full hide_section md:min-w-[450px]  "
          : "w-full hide_section  md:min-w-[450px] flex flex-col justify-between"
      }
    >
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className=" flex  gap-2 items-center   bg-gray-200 px-4 py-2 mb-2">
            {/* <span className='label-text'>To:</span>{" "} */}
            <span
              className={open ? "hide_icon cursor-pointer" : " cursor-pointer"}
            >
              <FaArrowLeft onClick={() => setOpen(false)} />
            </span>

            <span className="w-[40px] images rounded-full">
              <img
                src={
                  selectedConversation.profileImg
                    ? selectedConversation.profileImg
                    : selectedConversation.profilePic
                }
                alt="image"
              />
            </span>

            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />

          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className=" flex items-center justify-center w-full h-screen">
      <div className="    sm:text-lg md:text-xl text-gray-400 font-semibold flex flex-col justify-center  items-center gap-2">
        <img className="w-[400px]" src="./whats.png" alt="" />
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;

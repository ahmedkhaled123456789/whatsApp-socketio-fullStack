import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import Picker from "emoji-picker-react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const { loading, sendMessage } = useSendMessage();
  const [openEm, setOpenEm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message  ) return;
    
    await sendMessage( message );
    setMessage("");
    setImage(null);
  };

  const onEmojiClick = (event, emojiObject) => {

    setMessage((prev) => prev + emojiObject.emoji);
    setOpenEm(false);
  };

  const handleImage = async(e) => {
    if (e.target.files[0]) setImage(e.target.files[0]);
    if (  !image) return;
    await sendMessage( image );
    console.log(image)

  };

  return (
    <>
      <div className="bg-gray-200 p-4 flex items-center gap-2">
        <form className="flex items-center gap-2 w-full" onSubmit={handleSubmit}>
          <div className="cursor-pointer emoji">
            <FaRegFaceSmileWink onClick={() => setOpenEm(!openEm)} />
          </div>
          <div className="cursor-pointer">
            <label htmlFor="file" className="cursor-pointer">
              <TiPlus />
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleImage}
            />
          </div>
          
          <div className="w-full relative">
            <input
              type="text"
              className="border outline-none text-sm rounded-lg block w-full p-2.5 bg-white border-gray-200 text-black"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
              {loading ? <div className="loading loading-spinner"></div> : <BsSend />}
            </button>
          </div>
          <div className="cursor-pointer">
            <FaMicrophone />
          </div>
        </form>
      </div>
      {openEm && (
        <div className="picker w-full">
          <Picker
            pickerStyle={{ width: "100%" }}
            onEmojiClick={onEmojiClick}
          />
        </div>
      )}
    </>
  );
};

export default MessageInput;


// import { useState } from "react";
// import { BsSend } from "react-icons/bs";
// import { TiPlus } from "react-icons/ti";
// import { FaMicrophone } from "react-icons/fa";

// import { FaRegFaceSmileWink } from "react-icons/fa";
// import Picker from "emoji-picker-react";
// import useSendMessage from "../../hooks/useSendMessage";

// const MessageInput = () => {
//   const [message, setMessage] = useState("");
//   const [image, setImage] = useState(null);
//   const { loading, sendMessage } = useSendMessage();
//   const [open, setOpen] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!message && !image) return;
    
//     await sendMessage(message, image);
//     setMessage("");
//     setImage(null);
//   };

//   const onEmojiClick = (event, emojiObject) => {
//     setMessage((prev) => prev + emojiObject.emoji);
//     setOpen(false);
//   };

//   const handleImage = (e) => {
//     if (e.target.files[0]) setImage(e.target.files[0]);
//   };

//   return (
//     <>
//       <div className="bg-gray-200 p-4 flex items-center gap-2">
//         <form className="flex items-center gap-2 w-full" onSubmit={handleSubmit}>
//           <div className="cursor-pointer emoji">
//             <FaRegFaceSmileWink onClick={() => setOpen(!open)} />
//           </div>
//           <div className="cursor-pointer">
//             <label htmlFor="file" className="cursor-pointer">
//               <TiPlus />
//             </label>
//             <input
//               type="file"
//               id="file"
//               style={{ display: "none" }}
//               onChange={handleImage}
//             />
//           </div>
//           {image && (
//             <div className="image-preview">
//               <img
//                 src={URL.createObjectURL(image)}
//                 alt="Preview"
//                 className="h-10 w-10 object-cover rounded"
//               />
//             </div>
//           )}
//           <div className="w-full relative">
//             <input
//               type="text"
//               className="border outline-none text-sm rounded-lg block w-full p-2.5 bg-white border-gray-200 text-black"
//               placeholder="Type a message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
//               {loading ? <div className="loading loading-spinner"></div> : <BsSend />}
//             </button>
//           </div>
//           <div className="cursor-pointer">
//             <FaMicrophone />
//           </div>
//         </form>
//       </div>
//       {open && (
//         <div className="picker">
//           <Picker
//             pickerStyle={{ width: "100%" }}
//             onEmojiClick={onEmojiClick}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default MessageInput;

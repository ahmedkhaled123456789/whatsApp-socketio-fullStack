
import { useState } from "react";
import axios from "axios";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message, image) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("message", message);
      if (image) {
        formData.append("messageImage", image);
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }

      const res = await axios.post(
        `/api/messages/send/${selectedConversation._id}`,
        formData,
        config
      );

      if (res.data.error) throw new Error(res.data.error);

      setMessages([...messages, res.data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
 


// import { useState } from "react";
// import axios from "axios";
// import useConversation from "../zustand/useConversation";
// import toast from "react-hot-toast";

// const useSendMessage = () => {
//   const [loading, setLoading] = useState(false);
//   const { messages, setMessages, selectedConversation } = useConversation();

//   const sendMessage = async (message, file) => {
//     setLoading(true);
//     try {
//       const formData = new FormData();
//       formData.append("message", message);
//       if (file) {
//         formData.append("file", file);
//       }

//       const config = {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       };

//       const res = await axios.post(`/api/messages/send/${selectedConversation._id}`, formData, config);

//       if (res.data.error) throw new Error(res.data.error);

//       setMessages([...messages, res.data]);
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { sendMessage, loading };
// };

// export default useSendMessage;

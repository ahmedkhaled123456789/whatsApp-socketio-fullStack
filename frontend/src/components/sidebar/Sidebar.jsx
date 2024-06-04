 

import { useState } from "react";
import { PiChatText } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { useAuthContext } from "../../context/AuthContext";

 
import Chats from "./Chats";
import Profile from "./Profile";
import Setting from "./setting";

const Sidebar = ({ open, setOpen }) => {
  const { authUser } = useAuthContext();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div
      className={
        open
          ? "side_hide slider w-full md:w-[40%] bg-white flex"
          : "slider w-full md:w-[40%] bg-white flex"
      }
    >
      <div className="bg-gray-300 w-[50px] flex flex-col items-center justify-between py-4">
        <div
          className={`cursor-pointer rounded-full text-[20px] bg-gray-300 p-2 ${
            activeTab === 0 ? "bg-gray-400 text-black" : ""
          }`}
          onClick={() => handleTabClick(0)}
        >
          <PiChatText />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div
            className={`cursor-pointer rounded-full text-[20px] bg-gray-300 p-2  ${
              activeTab === 1 ? " bg-gray-400 text-black " : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            <IoMdSettings />
          </div>
          <div
            className="avatar cursor-pointer"
            onClick={() => handleTabClick(2)}
          >
            <div className="w-10 rounded-full">
              <img
                src={authUser.profileImg && authUser.profileImg}
                alt="user avatar"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        {activeTab === 0 && <Chats setOpen={setOpen} />}
        {activeTab === 1 && <Setting />}
        {activeTab === 2 && <Profile />}
      </div>
    </div>
  );
};

export default Sidebar;

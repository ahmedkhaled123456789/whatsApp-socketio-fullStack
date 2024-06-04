import { useAuthContext } from "../../context/AuthContext";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import { PiChatText } from "react-icons/pi";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Setting = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="slider     bg-white p-4 flex flex-col  ">
      <div className=" text-[20px] font-bold px-3 mb-5"> setting</div>

      <div className="w-full boder-none mb-2 px-2">
        <SearchInput />
      </div>

      <div className="flex gap-2 mt-3 items-center hover:bg-gray-200 rounded p-2 py-1 cursor-pointer">
        <div className="avatar   ">
          <div className="w-12 rounded-full">
            <img
              src={authUser.profileImg && authUser.profileImg}
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-black">{authUser.fullName}</p>
          </div>
        </div>
      </div>

      <div className="content_setting">
        <div className="flex gap-2 mt-3 items-center hover:bg-gray-200 rounded p-2 py-3 cursor-pointer">
          <div className=" text-[20px] mr-2 ">
            <RiAccountCircleFill />
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="font-bold text-black"> Account</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-3 items-center hover:bg-gray-200 rounded p-2 py-3 cursor-pointer">
          <div className=" text-[20px] mr-2 ">
            <RiGitRepositoryPrivateFill />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="font-bold text-black"> Privacy</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-3 items-center hover:bg-gray-200 rounded p-2 py-3 cursor-pointer">
          <div className=" text-[20px] mr-2 ">
            <PiChatText />
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="font-bold text-black"> Chats</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-3 items-center hover:bg-gray-200 rounded p-2 py-3 cursor-pointer">
          <div className=" text-[20px] mr-2 ">
            <IoNotifications />
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="font-bold text-black"> Notifications</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-3 items-center hover:bg-gray-200 rounded p-2 py-3 cursor-pointer">
          <div className=" text-[20px] mr-2 ">
            <IoIosHelpCircle />
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="font-bold text-black"> Help</p>
            </div>
          </div>
        </div>
<div className="logs mt-5 flex gap-3 cursor-pointer font-bold text-black">
<LogoutButton    /> Log Out
</div>
        
      </div>
    </div>
  );
};
export default Setting;

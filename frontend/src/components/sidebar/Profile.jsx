import { useAuthContext } from "../../context/AuthContext";


const Profile = () => {
  const { authUser } = useAuthContext();

  return (
    <div className=" slider  bg-gray-200 w-full  flex flex-col  ">
    <div className="bg-white  py-5 px-3 font-bold text-[20px] "> <h2 >Profile</h2> </div>
    <div className="flex   mt-8 items-center justify-center ">
      
        <div className="w-[200px] h-[200px] bg-white rounded-full">
          <img
            src={authUser.profileImg && authUser.profileImg}
            alt="profile "
          />
        </div>
 
       
    </div>

    <div className="bg-white flex gap-4 items-center   py-5 px-3  mt-8 "> <span className=" text-green-800   text-[15px] ">your name: </span> <h2 className="  font-bold text-[20px] ">{authUser.fullName}</h2> </div>
<p className="px-4 mt-7">this is not your user name or pin, this name will be visible to you{ "what's"} up contacts</p>
  </div>
  )
}

export default Profile

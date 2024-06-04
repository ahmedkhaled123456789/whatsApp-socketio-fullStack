import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  const [open,setOpen]=useState(false)

	return (
		<div className='h-screen  flex w-full   rounded-lg overflow-hidden bg-white   backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar open={open} setOpen={setOpen} />
       <MessageContainer  open={open} setOpen={setOpen}/>
 			
		</div>
	);
};
export default Home;

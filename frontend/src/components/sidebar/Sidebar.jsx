import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = ({open,setOpen}) => {
	return (
		<div className={open? "  side_hide  slider w-[40%]  bg-white p-4 flex flex-col":"slider w-[40%]  bg-white p-4 flex flex-col"}>
      <div className="w-full boder-none mb-2 px-2">
      <SearchInput />
      </div>
			
			{/* <div className='divider px-3'></div> */}
			<Conversations setOpen={setOpen} />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;

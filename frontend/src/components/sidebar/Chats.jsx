import Conversations from "./Conversations";
 import SearchInput from "./SearchInput";
const Chats = ({setOpen}) => {
  return (
    <div>
      <div className="slider    bg-white p-4 flex flex-col">
<div className="w-full boder-none mb-2 px-2">
<SearchInput />
</div>

 <Conversations setOpen={setOpen} />

</div>
    </div>
  )
}

export default Chats

import { Chatlist, SearchBar } from "../utils/helper";

const SidebarChats = () => {
  return (
    <div className="h-screen w-[400px] bg-gray-800 px-6">
      <h2 className="py-6 text-xl font-semibold text-white">Chats</h2>
      <SearchBar />
      <Chatlist />
    </div>
  );
};

export default SidebarChats;

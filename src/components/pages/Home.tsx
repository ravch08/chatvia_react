import {
  ChatBar,
  ChatBox,
  SidebarChats,
  SidebarProfile,
  SidebarSetting,
} from "../utils/helper";

const Home = () => {
  return (
    <div className="flex items-center">
      <ChatBar />
      <SidebarProfile />
      <SidebarChats />
      <SidebarSetting />
      <ChatBox />
    </div>
  );
};

export default Home;

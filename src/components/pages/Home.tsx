import { ChatBar, ChatBox, SidebarProfile } from "../utils/helper";

const Home = () => {
  return (
    <div className="flex items-center">
      <ChatBar />
      <SidebarProfile />
      <ChatBox />
    </div>
  );
};

export default Home;

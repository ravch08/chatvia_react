import { Outlet } from "react-router-dom";
import { ChatBar, ChatBox } from "../utils/helper";

const Home = () => {
  return (
    <div className="flex items-center">
      <ChatBar />
      <Outlet />
      <ChatBox />
    </div>
  );
};

export default Home;

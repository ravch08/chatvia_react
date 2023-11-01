import { useState } from "react";
import {
  ChatBar,
  ChatBox,
  SidebarChats,
  SidebarProfile,
  SidebarSetting,
} from "../utils/helper";

const Home = () => {
  const [showChats, setShowChats] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const [showSetting, setShowSetting] = useState(false);

  return (
    <div className="flex items-center">
      <ChatBar
        onClickChats={(bool: boolean) => setShowChats(bool)}
        onClickProfile={(bool: boolean) => setShowProfile(bool)}
        onClickSettings={(bool: boolean) => setShowSetting(bool)}
      />
      {showProfile && <SidebarProfile />}
      {showChats && <SidebarChats />}
      {showSetting && <SidebarSetting />}
      <ChatBox />
    </div>
  );
};

export default Home;

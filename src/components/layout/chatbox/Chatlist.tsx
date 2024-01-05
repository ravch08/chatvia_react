import { user1, user12, user2 } from "../../utils/helper";
import ChatItem from "./ChatItem";

const Chatlist = () => {
  return (
    <div className="pt-8">
      <h2 className="mb-6 text-lg font-semibold text-white">Recent</h2>
      <div className="top-0 flex h-[700px] flex-col overflow-auto">
        <ChatItem
          imgSrc={user12}
          name="John McKinsy"
          message="Lorem ipsum, dolor sit amet ..."
        />
        <ChatItem
          imgSrc={user1}
          name="John McKinsy"
          message="Lorem ipsum, dolor sit amet ..."
        />
        <ChatItem
          imgSrc={user2}
          name="John McKinsy"
          message="Lorem ipsum, dolor sit amet ..."
        />
        <ChatItem
          imgSrc={user2}
          name="John McKinsy"
          message="Lorem ipsum, dolor sit amet ..."
        />
        <ChatItem
          imgSrc={user2}
          name="John McKinsy"
          message="Lorem ipsum, dolor sit amet ..."
        />
      </div>
    </div>
  );
};

export default Chatlist;

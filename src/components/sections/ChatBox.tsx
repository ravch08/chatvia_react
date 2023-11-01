import { ChatBoxChats, ChatBoxFooter, ChatBoxHeader } from "../utils/helper";

const ChatBox = () => {
  return (
    <div className="width-chats flex h-screen flex-col justify-between">
      <ChatBoxHeader />
      <ChatBoxChats />
      <ChatBoxFooter />
    </div>
  );
};

export default ChatBox;

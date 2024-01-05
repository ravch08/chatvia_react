import { ChatMessage, sampleChatImg, user4, user5 } from "../../utils/helper";

const ChatBoxChats = () => {
  return (
    <div className="flex h-full scroll-p-0 flex-col gap-8 overflow-y-scroll bg-gray-950 p-4 text-sm text-white">
      <ChatMessage
        owner={false}
        imgSrc={user4}
        message="Hi there!"
        sampleImg={sampleChatImg}
      />
      <ChatMessage owner={true} imgSrc={user5} message="Hi! How are you?" />
      <ChatMessage
        owner={false}
        imgSrc={user4}
        message="Hi there!"
        sampleImg={sampleChatImg}
      />
      <ChatMessage owner={true} imgSrc={user5} message="Hi! How are you?" />
      <ChatMessage
        owner={false}
        imgSrc={user4}
        message="Hi there!"
        sampleImg={sampleChatImg}
      />
      <ChatMessage owner={true} imgSrc={user5} message="Hi! How are you?" />
    </div>
  );
};

export default ChatBoxChats;

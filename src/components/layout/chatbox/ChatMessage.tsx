import { ChatMessageProps } from "../../../types/types";
import { sampleChatImg } from "../../utils/helper";

const ChatMessage = ({
  message,
  imgSrc,
  sampleImg,
  owner,
}: ChatMessageProps) => {
  return (
    <div className={owner ? "chat-message owner" : "chat-message"}>
      <div className="chat-info">
        <img src={imgSrc} alt="Jason" className="w-10 rounded-full" />
        <span className="text-xs text-gray-400">just now</span>
      </div>
      <div className="chat-content">
        <p className="chat-text">{message}</p>
        {sampleImg ? (
          <img src={sampleChatImg} alt="sample" className="w-1/3 rounded-md" />
        ) : null}
      </div>
    </div>
  );
};

export default ChatMessage;

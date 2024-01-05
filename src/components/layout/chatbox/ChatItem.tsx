import { ChatItemProps } from "../../../types/types";

const ChatItem = (props: ChatItemProps) => {
  return (
    <div className="flex cursor-pointer items-center gap-4 rounded-md p-4 transition-colors duration-500 ease-in-out hover:bg-gray-700">
      <figure className="w-14 overflow-hidden rounded-full">
        <img src={props.imgSrc} alt={props.name} />
      </figure>
      <div className="flex w-full flex-col items-start justify-between gap-1">
        <div className="flex w-full items-center justify-between">
          <h3 className="text-base font-semibold text-white">{props.name}</h3>
          <span className="text-xs text-white">05 mins</span>
        </div>
        <p className="text-sm text-gray-400">{props.message}</p>
      </div>
    </div>
  );
};

export default ChatItem;

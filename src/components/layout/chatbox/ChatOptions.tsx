import { useState } from "react";

const ChatOptions = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowOptions = () => setShowDropdown((prev) => !prev);

  const optionClass = showDropdown
    ? "optionsDropdown visible relative opacity-100 transition-all ease-in-out"
    : "optionsDropdown opacity-0 hidden";

  return (
    <>
      <div className="relative cursor-pointer p-2" onClick={handleShowOptions}>
        <svg
          fill="none"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          className="h-5 w-5 stroke-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
      <div className={optionClass}>
        <a
          href="#!"
          className="flex items-center justify-between px-4 py-2 hover:bg-gray-700"
        >
          <span className="text-sm text-white">Archive</span>
          <svg
            fill="none"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </a>
        <a
          href="#!"
          className="flex items-center justify-between px-4 py-2 hover:bg-gray-700"
        >
          <span className="text-sm text-white">Muted</span>
          <svg
            fill="none"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
            />
          </svg>
        </a>
        <a
          href="#!"
          className="flex items-center justify-between px-4 py-2 hover:bg-gray-700"
        >
          <span className="text-sm text-white">Delete</span>
          <svg
            fill="none"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default ChatOptions;

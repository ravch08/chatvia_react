import { Wrapperprops } from "../../types/types";

const Wrapper = ({ children }: Wrapperprops) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-800">
      {children}
    </div>
  );
};

export default Wrapper;

import { profile } from "../utils/helper";

const SidebarSetting = () => {
  return (
    <div className="h-screen w-[400px] bg-gray-800">
      <h2 className="p-6 text-xl font-semibold text-white">Settings</h2>
      <div className="flex flex-col items-center justify-center pb-6">
        <figure className="mb-3 overflow-hidden rounded-full">
          <img src={profile} alt="Patricia Smith" width={120} />
        </figure>
        <h3 className="mb-2 text-lg font-medium text-white">Patricia Smith</h3>
        <select
          id="status"
          className="cursor-pointer border-none bg-transparent px-1 text-center text-gray-400 outline-none"
        >
          <option value="available">Available</option>
          <option value="busy">Busy</option>
        </select>
      </div>
    </div>
  );
};

export default SidebarSetting;

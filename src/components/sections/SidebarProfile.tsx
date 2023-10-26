import { Profile, profile } from "../utils/helper";

const SidebarProfile = () => {
  return (
    <div className="h-screen w-[400px] bg-gray-800">
      <h2 className="p-6 text-xl font-semibold text-white">My Profile</h2>
      <div className="flex flex-col items-center justify-center pb-6">
        <figure className="mb-3 overflow-hidden rounded-full">
          <img src={profile} alt="Patricia Smith" width={120} />
        </figure>
        <h3 className="mb-2 text-lg font-medium text-white">Patricia Smith</h3>
        <div className="flex items-center gap-1">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 fill-green-600"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
            />
          </svg>

          <span className="text-sm text-slate-400">Active</span>
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default SidebarProfile;

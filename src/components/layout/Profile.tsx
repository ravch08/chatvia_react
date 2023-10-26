const Profile = () => {
  return (
    <div className="border-t border-gray-700 p-6 text-gray-400">
      <p>
        If several languages coalesce, the grammar of the resulting language is
        more simple and regular than that of the individual.
      </p>
      <div className="mt-6 flex items-center gap-2 rounded-t-md bg-gray-700 px-4 py-2">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-gray-50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
        <span>About</span>
      </div>
      <div className="rounded-b-md bg-gray-950 py-2">
        <div className="flex flex-col items-start justify-between px-4 py-2">
          <span>Name</span>
          <span className="text-white">Patricia Smith</span>
        </div>
        <div className="flex flex-col items-start justify-between px-4 py-2">
          <span>Email</span>
          <span className="text-white">patricia.smith@gmail.com</span>
        </div>
        <div className="flex flex-col items-start justify-between px-4 py-2">
          <span>Time</span>
          <span className="text-white">11:40 AM</span>
        </div>
        <div className="flex flex-col items-start justify-between px-4 py-2">
          <span>Location</span>
          <span className="text-white">California, USA</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;

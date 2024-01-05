const SearchBar = () => {
  return (
    <>
      <label htmlFor="searchTerm" className="relative block">
        <svg
          fill="none"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          className="absolute left-4 top-3 h-4 w-4"
          stroke="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          id="searchTerm"
          placeholder="Search user"
          className="w-full bg-gray-200 px-12 py-2 text-white outline-none placeholder:text-sm"
        />
      </label>
    </>
  );
};

export default SearchBar;

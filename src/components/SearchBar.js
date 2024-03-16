import React, { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="p-2 flex gap-2">
      <div className="w-full">
        <input
          type="text"
          value={searchText}
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full rounded-lg pl-2"
        />
      </div>
      <div className="w-1/12 flex justify-center items-center">
        <div className="rounded-full w-6 h-6 border flex justify-center items-center">
          <img src="/svg/searchIcon.svg" alt="searchIcon" className="w-4" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

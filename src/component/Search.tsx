import React, { useState } from "react";

const Search = ({ search }: any) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (event: any) => {
    setSearchValue(event.target.value);
    search(searchValue);
    // props.setSearchWord(searchValue);
  };

  return (
    <>
      <div>Search</div>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="タイトル"
      />
      <button onClick={onSearch}>検索</button>
    </>
  );
};

export default Search;

import React, { memo, useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";

const Search = memo((props: any) => {
  const { currentUser } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState("");
  const [loginAlert, setLoginAlert] = useState(false);

  const onSearch = (event: any) => {
    if (currentUser) {
      // setLoginAlert(false);
      props.setDatas([]);
      setSearchValue(event.target.value);
      props.search(searchValue);
    } else {
      setLoginAlert(true);
      return;
    }
  };

  // Enterキーで検索
  const handleKeypress = (e: any) => {
    if (e.key === "Enter") {
      props.search(searchValue);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-12 mb-12 w-full group">
        <div className="w-full sm:w-1/2 mx-5">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={(event) => setSearchValue(event.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="タイトル"
              onKeyDown={handleKeypress}
            />
            <button
              onClick={onSearch}
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              検索
            </button>
          </div>
        </div>
      </div>
      {props.alert && (
        <div className="flex justify-center">
          <div
            className="w-full sm:w-1/2 mx-5 flex justify-center p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span className="font-medium">見つかりませんでした</span>
          </div>
        </div>
      )}
      {loginAlert && (
        <div className="flex justify-center">
          <div
            className="w-full sm:w-1/2 mx-5 flex justify-center p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span className="font-medium">ログインしてください</span>
          </div>
        </div>
      )}
    </>
  );
});

export default Search;

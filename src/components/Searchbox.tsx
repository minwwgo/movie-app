import React from "react";


type SearchboxProps = {
  searchShowTerm: string;
  setSearchShowTerm: Function;
  handleSubmit: Function;
};


export const Searchbox: React.FC<SearchboxProps> = ({
  searchShowTerm,
  setSearchShowTerm,
  handleSubmit,
}) => {
  return (
    <form className="p-8" onSubmit={(e)=>handleSubmit(e)}>
      <div className="bg-white flex items-center rounded-full shadow-xl">
        <div className="p-4">
          <button
            type="submit"
            className="bg-gray-300 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
        <input
          className="rounded-r-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
          value={searchShowTerm}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const searchTitle = event.target?.value?.toLowerCase();
            setSearchShowTerm(searchTitle);
          }}
        />
      </div>
    </form>
  );
};

import React, { useState, useEffect } from "react";

import { Pagetitle } from "../components/Pagetitle";
import { Singleshow } from "../components/Singleshow";
import { Searchbox } from "../components/Searchbox";
import { GBshows } from "../components/GBshows";

export const AllShowPage: React.FC = () => {
  const [searchShowTerm, setSearchShowTerm] = useState("");
  const [showDetails, setShowDetails] = useState([]);
  const [showId, setShowId] = useState("");
  const [selectedShow, setSelectedShow] = useState([]);
  const [search, setSearch] = useState("");
  const [showCast, setShowCast] = useState([]);

  useEffect(() => {
    getShow(searchShowTerm, showId);
  }, [searchShowTerm]);

  const getShow = async (showTitle: string, showNumber: string) => {
    const result = await fetch(
      `https://api.tvmaze.com/search/shows?q=${showTitle}`
    )
      .then((response) => response.json())
      .then((data) =>
        data?.filter((movie: any) =>
          movie?.show?.name.toLowerCase().includes(showTitle.toLowerCase())
        )
      );
    setSelectedShow(result[0]);
    setShowId(result[0]?.show?.id);

    if (showId) {
      const episodeResult = await fetch(
        ` https://api.tvmaze.com/shows/${showNumber}/episodes`
      )
        .then((response) => response.json())
        .then((data) => data);

      setShowDetails(episodeResult);

      const castResult = await fetch(
        `https://api.tvmaze.com/shows/${showNumber}/cast`
      )
        .then((response) => response.json())
        .then((data) => data);

      setShowCast(castResult);
    }
  };

  return (
    <div className="w-full h-full">
      <Pagetitle text={searchShowTerm ? "Media details" : "Media search"} />
      <div className="border-gray-900 border-solid border-2 mb-4">
        <div className="max-w-7xl mx-auto p-4 ">
          <div className="grid grid-cols-2 items-center ">
            <p className="text-4xl">Sav State</p>
            <Searchbox
              searchShowTerm={searchShowTerm}
              setSearchShowTerm={setSearchShowTerm}
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>
      </div>
      {searchShowTerm.length > 0 && (
        <Singleshow 
        selectedShow={selectedShow} 
        showDetails={showDetails}
        showCast={showCast}
         />
      )}
      {searchShowTerm.length < 1 && <GBshows />}
    </div>
  );
};

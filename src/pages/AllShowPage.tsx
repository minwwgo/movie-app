import React, { useState, useEffect } from "react";

import { Pagetitle } from "../components/Pagetitle";
import { Singleshow } from "../components/Singleshow";
import { Searchbox } from "../components/Searchbox";
import { GBshows } from "../components/GBshows";
import useSWR from "swr";
import { Showfetcher } from "../services/shows.service";

export const AllShowPage: React.FC = () => {
  const [searchShowTerm, setSearchShowTerm] = useState("");
  const [showDetails, setShowDetails] = useState([]);
  const [showId, setShowId] = useState("");
  const [selectedShow, setSelectedShow] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (showId) {
      getShowDetails(showId);
    }
    getShow(searchShowTerm);
  }, [searchShowTerm]);

  // const fetchShowUrl= `https://api.tvmaze.com/search/shows?q=${searchShowTerm}`;

  // const { data: showData, error } = useSWR(
  //   searchShowTerm ? fetchShowUrl : null,
  //   Showfetcher
  // );
  // if(showData){
  //   const result = showData.filter((movie: any) =>
  //     movie?.show?.name.toLowerCase().includes(searchShowTerm.toLowerCase())
  //   );
  //     setSelectedShow(result[0]);
  //     setShowId(result[0]?.show?.id);
  // }
  


  const getShow = async (showTitle: string) => {
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
  };

  const getShowDetails = async (showNumber: string) => {
    const result = await fetch(
      ` https://api.tvmaze.com/shows/${showNumber}/episodes`
    )
      .then((response) => response.json())
      .then((data) => data);

    setShowDetails(result);
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
        <Singleshow selectedShow={selectedShow} showDetails={showDetails} />
      )}
      {searchShowTerm.length < 1 && <GBshows />}
    </div>
  );
};

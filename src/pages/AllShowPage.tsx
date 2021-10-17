import React, { useState, useEffect } from "react";
import { getShows, getSingleShow } from "../services/shows.service";
import { Pagetitle } from "../components/Pagetitle";
import { Singleshow } from "../components/Singleshow";
import { Searchbox } from "../components/Searchbox";
import { GBshows } from "../components/GBshows";

export const AllShowPage: React.FC = () => {
  const [searchShowTerm, setSearchShowTerm] = useState("");
  const [showDetails, setShowDetails] = useState([]);
  const [showId, setShowId] = useState<number>();

 
  
  useEffect(() => {
    const getLocalShow = localStorage.getItem("SavState:selectedShow");
    if (getLocalShow) {
      setShowDetails(JSON.parse(getLocalShow));
    }
  },[showId]);

  useEffect(() => {
    if (showId) {
      getShow(showId);
       
    }
  }, [showId]);

  const getShow = async (Id: number) => {
    const selectedShowDetail = await getSingleShow(Id);
    localStorage.setItem(
      "SavState:selectedShow",
      JSON.stringify(selectedShowDetail)
    );
    setShowDetails(selectedShowDetail);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const getShow = await getShows(searchShowTerm);
    setShowId(getShow.show.id);
  };
  

  return (
    <div className="w-full h-full">
      <Pagetitle text={showId ? "Media details" : "Media search"} />
      <div className="border-gray-900 border-solid border-2 mb-4">
        <div className="max-w-7xl mx-auto p-4 ">
          <div className="grid grid-cols-2 items-center ">
            <p className="text-4xl">Sav State</p>
            <Searchbox
              searchShowTerm={searchShowTerm}
              setSearchShowTerm={setSearchShowTerm}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>

      {showId ? <Singleshow showDetails={showDetails} /> : <GBshows />}
    </div>
  );
};

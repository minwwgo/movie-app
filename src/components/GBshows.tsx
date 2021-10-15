import React from "react";
import useSWR from "swr";
import {
  fetcher,
  API_GET_SHOWS_GB_TODAY,
} from "../services/shows.service";
import defaultImage from "../image/defaultImage.jpeg";

export const GBshows: React.FC = () => {
  
  const { data: gbShowList, error: errorUkShow } = useSWR(
    API_GET_SHOWS_GB_TODAY,
    fetcher
  );

  if (errorUkShow) return <div>failed to load</div>;
  if (!gbShowList) return <div>loading...</div>;
  return (
    <div className="max-w-7xl mx-auto p-4 ">
      <div className="grid grid-cols-5 gap-6 ">
        {gbShowList &&
          gbShowList?.map((movie: any) => {
            return (
              <div
                className="w-full flex justify-center items-center"
                key={movie.id}
              >
                <img
                  className="object-center object-fit h-72 w-56"
                  src={movie?.show?.image?.medium ?? defaultImage}
                  alt="poster"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

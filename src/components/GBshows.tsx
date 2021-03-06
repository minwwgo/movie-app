import React from "react";
import useSWR from "swr";
import { fetcher } from "../useCases/utils";
import { GB_SHOWS_URL } from "../services/shows.service";
import defaultImage from "../image/defaultImage.jpeg";
import { ErrorMessage } from "./ErrorMessage";

export const GBshows: React.FC = () => {
console.log(GB_SHOWS_URL);

  const { data: gbShowList, error: errorUkShow } = useSWR(
    GB_SHOWS_URL,
    fetcher
  );

  if (errorUkShow) return  <ErrorMessage text="failed to load" />;
  if (!gbShowList) return <div>loading...</div>;
  return (
    <div className="max-w-7xl mx-auto p-4 h-screen overflow-scroll">
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

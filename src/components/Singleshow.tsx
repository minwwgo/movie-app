import React from "react";

type SingleShowProps = {
  selectedShow: any;
  showDetails: any;
  showCast: any;
};

export const Singleshow: React.FC<SingleShowProps> = ({
  selectedShow,
  showDetails,
  showCast
}) => {

  console.log(showCast)
  return (
    <div className="max-w-7xl mx-auto p-4">
      {selectedShow && (
        <div className="grid grid-cols-4 gap-8">
          <img
            className="h-72 w-56 rounded-lg"
            src={
              selectedShow?.show?.image?.medium ??
              selectedShow?.show?.image?.original
            }
            alt="Movie Poster"
          />
          <div className="col-span-3">
            <div className="flex text-2xl font-bold">
              <h1>{selectedShow?.show?.name}</h1>
              <h1>({selectedShow?.show?.premiered?.split("-")[0]})</h1>
            </div>
            <div>
              {selectedShow?.show?.summary?.replace(/<\/?[^>]+(>|$)/g, "")}
            </div>
            <div>
              <div className="flex">
                Cast:
                {showCast
                  .map((cast: any) => <div className="pl-4"> {cast.person.name} , </div>)
                  .slice(0, 2)}
              </div>

              <div>Status: {selectedShow?.show?.status}</div>
              <div>
                Genres:{" "}
                {selectedShow?.show?.genres
                  ?.map((genre: any) => genre)
                  .join(",")}
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="grid grid-cols-5 p-4 ">
          {showDetails &&
            showDetails?.map((episode: any) => {
              return (
                <div key={episode.id}>
                  <div className="flex px-4">
                    <div className="pr-4"> season: {episode?.season}</div>
                    <div> episode:{episode?.number}</div>
                  </div>
                  <img
                    className="h-32 w-56"
                    src={episode?.image?.original}
                    alt="Movie poster"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

import React from "react";


type SingleShowProps = {
  showDetails: any;
};

export const Singleshow: React.FC<SingleShowProps> = ({ showDetails }) => {
  const { name, image, summary, genres, status, premiered } = showDetails;
  const casts = showDetails?._embedded?.cast;
  const episodes = showDetails?._embedded?.episodes;
  const seasons = showDetails?._embedded?.seasons;
  console.log(episodes);
  return (
    <div className="max-w-7xl mx-auto p-4">
      {showDetails && (
        <div className="grid grid-cols-4 gap-8">
          <img
            className="h-72 w-56 rounded-lg"
            src={image?.medium ?? image?.original}
            alt="Movie Poster"
          />
          <div className="col-span-3">
            <div className="flex text-2xl font-bold">
              <h1>{name}</h1>
              <h1>({premiered?.split("-")[0]})</h1>
            </div>
            <div>{summary?.replace(/<\/?[^>]+(>|$)/g, "")}</div>
            <div>
              <div className="flex">
                Cast:
                {casts
                  ?.map((cast: any) => (
                    <div className="pl-4"> {cast?.person?.name} </div>
                  ))
                  .slice(0, 2)}
              </div>

              <div>Status: {status}</div>
              <div>Genres: {genres?.map((genre: any) => genre).join(",")}</div>
            </div>
          </div>
        </div>
      )}
      <div>
        {seasons?.map((cast: any) => (
          <div>
            <div className="my-4 font-bold text-2xl">
              {" "}
              Season : {cast.number}
            </div>

            <div className="grid grid-cols-5">
              {episodes &&
                episodes?.map((episode: any) => {
                  return (
                    <div key={episode.id}>
                      {episode.season === cast.number && (
                        <div className="m-2">
                          <img
                            className="h-32 w-56 "
                            src={episode?.image?.original}
                            alt="Movie poster"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

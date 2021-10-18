import {today} from "../useCases/utils"

export const TVMAZE_API_URL = "https://api.tvmaze.com";

export const GB_SHOWS_URL = `${
  TVMAZE_API_URL as string
}/schedule?country=GB&date=${today}`;

const SEARCH_SHOW_URL = (showTitle: string) =>
  `${TVMAZE_API_URL as string}/search/shows?q=${showTitle}`;

export const SEARCH_SINGLE_SHOW_URL = (showId: number) =>
  `${
    TVMAZE_API_URL as string
  }/shows/${showId}?embed[]=cast&embed[]=seasons&embed[]=episodes`;

export const searchShows = async (showTitle: string) => {
  return await fetch(SEARCH_SHOW_URL(showTitle), { method: "GET" })
    .then((res) => res.json())
    .then(
      (data) =>
        data?.filter((movie: any) =>
          movie?.show?.name.toLowerCase().includes(showTitle.toLowerCase())
        )[0]
    );
};



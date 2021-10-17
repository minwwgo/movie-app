export const APP_API_URL = "https://api.tvmaze.com/schedule";

const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

export const API_GET_SHOWS_GB_TODAY = `${APP_API_URL}?country=GB&date=${date}`;

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getShowsApi = (showTitle: string) =>
  `https://api.tvmaze.com/search/shows?q=${showTitle}`;

export const getShows = async (showTitle: string) => {
  return await fetch(getShowsApi(showTitle), { method: "GET" })
    .then((res) => res.json())
    .then(
      (data) =>
        data?.filter((movie: any) =>
          movie?.show?.name.toLowerCase().includes(showTitle.toLowerCase())
        )[0]
    );
};

const getSingleShowApi = (showId: number) =>
  `http://api.tvmaze.com/shows/${showId}?embed[]=cast&embed[]=seasons&embed[]=episodes`;

export const getSingleShow = async (showId: number) => {
  return await fetch(getSingleShowApi(showId), { method: "GET" }).then((res) =>
    res.json()
  );
};

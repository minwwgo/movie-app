export const APP_API_URL = "https://api.tvmaze.com/schedule";

const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

export const API_GET_SHOWS_GB_TODAY = `${APP_API_URL}?country=GB&date=${date}`;

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Showfetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data);

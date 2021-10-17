

export const date = new Date();
export const today =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();


export const fetcher = (url: string) => fetch(url).then((res) => res.json());

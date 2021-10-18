import React from "react";
import useSWR from "swr";
import { SEARCH_SINGLE_SHOW_URL } from "../services/shows.service";
import { fetcher } from "../useCases/utils";
import { Singleshow } from "../components/Singleshow";


export const SearchShowPage: React.FC = ({ match }: any) => {
  const { id } = match?.params;

  const searchShowUrl = SEARCH_SINGLE_SHOW_URL(id);

  const { data: showDetails, error } = useSWR(searchShowUrl, fetcher);

  if (error) return <div>failed to load</div>;

  if (!showDetails) return <div>loading...</div>;

  return <div>{showDetails && <Singleshow showDetails={showDetails} />}</div>;
};

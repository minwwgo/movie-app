import React from "react";
import useSWR from "swr";
import { SEARCH_SINGLE_SHOW_URL } from "../services/shows.service";
import { fetcher } from "../useCases/utils";
import { Singleshow } from "./Singleshow";
import { Pagetitle } from "../components/Pagetitle";
import { SectionContent } from "../components/SectionContent";
import { Footer } from "../components/Footer";

export const SearchShow: React.FC = ({ match }: any) => {
  const { id } = match?.params;

  const searchShowUrl = SEARCH_SINGLE_SHOW_URL(id);

  const { data: showDetails, error } = useSWR(searchShowUrl, fetcher);

  if (error) return <div>failed to load</div>;

  if (!showDetails) return <div>loading...</div>;

  return (
    <div>
      <Pagetitle text={"Media Details"} />
      <SectionContent />
      {showDetails && <Singleshow showDetails={showDetails} />}
      <Footer />
    </div>
  );
};

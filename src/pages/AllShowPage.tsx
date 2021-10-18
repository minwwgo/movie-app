import React from "react";
import { Pagetitle } from "../components/Pagetitle";
import { GBshows } from "../components/GBshows";
import { SectionContent } from "../components/SectionContent";
import { Footer } from "../components/Footer";

export const AllShowPage: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Pagetitle text={"Media search"} />
      <SectionContent />
      <GBshows />
      <Footer />
    </div>
  );
};

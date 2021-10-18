import React from "react";
import { Searchbox } from "./Searchbox";
import { useHistory } from "react-router";

export const SectionContent: React.FC = () => {
  const history = useHistory();
  return (
    <section className="border-gray-900 border-solid border-2 mb-4">
      <div className="max-w-7xl mx-auto p-4 ">
        <div className="grid grid-cols-2 items-center ">
          <div className="text-4xl">
            <button
              onClick={() => {
                history.push(`/`);
              }}
            >
              Sav State
            </button>
          </div>
          <Searchbox />
        </div>
      </div>
    </section>
  );
};

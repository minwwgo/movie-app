import React from "react";

type PageTitleText = {
  text: string;
};

export const Pagetitle: React.FC<PageTitleText> = ({ text }) => {
  return (
    <header className="border-gray-900 border-solid border-t-2 border-r-2 border-l-2">
      {text}
    </header>
  );
};

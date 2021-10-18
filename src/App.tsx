import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AllShowPage } from "./pages/AllShowPage";
import { SearchShowPage } from "../src/pages/SearchShowPage";
import { Pagetitle } from "../src/components/Pagetitle";
import { SectionContent } from "../src/components/SectionContent";
import { Footer } from "../src/components/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Pagetitle  />
        <SectionContent />
        <Switch>
          <Route path="/" component={AllShowPage} exact />
          <Route path="/:id" component={SearchShowPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

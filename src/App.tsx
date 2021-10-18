import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AllShowPage } from "./pages/AllShowPage";
import { SearchShow } from "./components/SearchShow";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AllShowPage} exact />
        <Route path="/:id" component={SearchShow} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

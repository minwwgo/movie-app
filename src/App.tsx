import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AllShowPage } from "./pages/AllShowPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AllShowPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

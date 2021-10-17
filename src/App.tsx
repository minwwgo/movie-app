import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GBshows } from "./components/GBshows";
import { Singleshow } from "./components/Singleshow";
import { AllShowPage } from "./pages/AllShowPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AllShowPage} exact/>
          <Route path="/show" component={Singleshow} />
          <Route path="/gbshow" component={GBshows} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

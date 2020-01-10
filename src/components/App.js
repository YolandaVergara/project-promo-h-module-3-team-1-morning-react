import React from "react";
import Main from "./Main";
import Landing from "./Landing";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import "../stylesheets/layout/design.scss";
import "../stylesheets/layout/fill.scss";
import "../stylesheets/layout/share.scss";

function App () {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/main" component={Main} />
        </Switch>
      </div>
    );
  }
export default App;

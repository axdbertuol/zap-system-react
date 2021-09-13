import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Messages from "../pages/Messages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Dashboard />} />
      <Route path="/messages">
        <Messages />
      </Route>
    </Switch>
  );
};

export default Routes;

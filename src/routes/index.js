import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import MessagesPage from "../pages/Messages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Dashboard />} />
      <Route path="/messages">
        <MessagesPage />
      </Route>
    </Switch>
  );
};

export default Routes;

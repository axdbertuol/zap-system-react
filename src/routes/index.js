import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import MessagesPage from "../pages/Messages";
import NewMessagePage from "../pages/NewMessage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Dashboard />} />
      <Route path="/messages">
        <MessagesPage />
      </Route>
      <Route path="/nova-mensagem">
        <NewMessagePage />
      </Route>
    </Switch>
  );
};

export default Routes;

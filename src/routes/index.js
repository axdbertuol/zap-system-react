import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      {/* <Route path="/details">
          <Details />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route> */}
    </Switch>
  );
};

export default Routes;

import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import MessagesPage from "../pages/Messages";
import NewMessagePage from "../pages/NewMessage";
import { useSelector } from "react-redux";
import { persistor } from "../store";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const render = ({ location }) => {
    if (isAuthenticated) {
      return children;
    }
    // persistor.purge();
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );
  };
  return <Route {...rest} render={render} />;
}

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" exact render={() => <LoginPage />} />
      <PrivateRoute path="/" exact>
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/messages">
        <MessagesPage />
      </PrivateRoute>
      <PrivateRoute path="/nova-mensagem">
        <NewMessagePage />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;

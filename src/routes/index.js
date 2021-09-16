import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import MessagesPage from "../pages/Messages";
import NewMessagePage from "../pages/NewMessage";
import { useSelector } from "react-redux";
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  // const {
  //   state: { token },
  // } = useContext(AuthContext);
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          //redirect to Login
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
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

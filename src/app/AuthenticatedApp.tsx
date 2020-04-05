import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

const Home = () => <div>HOME</div>;

const AuthenticatedApp: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path={routes.home} component={Home} />
    </Switch>
  );
};

export default AuthenticatedApp;

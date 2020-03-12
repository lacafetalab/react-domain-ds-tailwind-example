import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "utils/PrivateRoute";
import _domain from "_domain";
import routes from "./routes";
import Login from "./Login";
import LoadingPage from "components/LoadingPage";

const App: React.FC = () => {
  const requireAuth = async () => {
    const user = await _domain.current_user_use_case.execute();
    return !!user;
  };

  const redirectHome = async () => {
    const user = await _domain.current_user_use_case.execute();
    return !user;
  };

  return (
    <Router>
      <Switch>
        <PrivateRoute
          exact={true}
          auth={requireAuth}
          path={routes.home}
          redirect={routes.login}
          component={LoadingPage}
          loadingComponent={LoadingPage}
        />
        <PrivateRoute
          exact={true}
          auth={redirectHome}
          path={routes.login}
          redirect={routes.home}
          component={Login}
        />
      </Switch>
    </Router>
  );
};

export default App;

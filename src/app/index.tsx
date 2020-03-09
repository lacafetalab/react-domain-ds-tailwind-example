import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "utils/PrivateRoute";
import _domain from "_domain";
import routes from "./routes";

const asd = () => {
  return <div>aaaa</div>;
};

const pending = () => {
  return <div>eeeee</div>;
};
/*
_domain.login_user_use_case
  .execute("eve.holt@reqres.in", "cityslicka")
  .then(response => {
    console.log(response);
  });*/

const App: React.FC = () => {
  const requireAuth = async () => {
    const user = await _domain.current_user_use_case.execute();
    console.log("a", !!user);
    return !!user;
  };

  const redirectToHome = async () => {
    const user = await _domain.current_user_use_case.execute();
    console.log("b", !user);
    return !user;
  };

  return (
    <Router>
      <Switch>
        <PrivateRoute
          exact={true}
          auth={redirectToHome()}
          path={routes.login}
          redirect={routes.home}
          component={asd}
        />
        <PrivateRoute
          exact={true}
          auth={requireAuth()}
          path={routes.home}
          redirect={routes.login}
          component={asd}
          loadingComponent={pending}
        />
      </Switch>
    </Router>
  );
};

export default App;

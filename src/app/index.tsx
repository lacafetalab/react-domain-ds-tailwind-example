import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import _domain from "_domain";
import routes from "./routes";
import Login from "./Login";
import LoadingPage from "components/LoadingPage";
import ConditionalRoute from "utils/ConditionalRoute";

const App: React.FC = () => {
  const [authStatus, setAuthStatus] = useState("idle");
  const isResolved = authStatus === "resolved";
  const isRejected = authStatus === "rejected";
  const isLoading = authStatus === "idle" || authStatus === "pending";

  useEffect(() => {
    const requireAuth = async () => {
      setAuthStatus("pending");
      try {
        await _domain.current_user_use_case.execute();
        setAuthStatus("resolved");
      } catch {
        setAuthStatus("rejected");
      }
    };

    requireAuth();
  }, []);

  return (
    <Router>
      <Switch>
        <ConditionalRoute
          exact={true}
          isAuth={isRejected}
          path={routes.home}
          redirect={routes.login}
          component={LoadingPage}
          loadingComponent={LoadingPage}
          isLoading={isLoading}
        />
        <ConditionalRoute
          exact={true}
          isAuth={isResolved}
          path={routes.login}
          redirect={routes.home}
          component={Login}
          isLoading={isLoading}
        />
      </Switch>
    </Router>
  );
};

export default App;

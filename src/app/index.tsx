import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import useUser from "hooks/useUser";
import LoadingPage from "components/LoadingPage";

const AuthenticatedApp = React.lazy(() =>
  import(/* webpackPrefetch: true */ "./AuthenticatedApp")
);

const Login = React.lazy(() => import("./Login"));

const App: React.FC = () => {
  const {
    state: { data: user },
  } = useUser();

  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Route render={() => (user ? <AuthenticatedApp /> : <Login />)} />
      </Suspense>
    </Router>
  );
};

export default App;

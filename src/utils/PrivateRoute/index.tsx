import React, { useState } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({
  auth,
  redirect = "/",
  component: Component,
  loadingComponent: LoadingComponent = () => <></>,
  ...rest
}) => {
  const [status, setStatus] = useState("pending");

  auth
    .then((response: boolean) => {
      setStatus(response ? "resolved" : "rejected");
    })
    .catch(() => setStatus("rejected"));

  const render = (props: RouteComponentProps) => {
    if (status === "pending") {
      return <LoadingComponent />;
    }

    if (status === "resolved") {
      return <Component {...props} />;
    }

    if (status === "rejected") {
      return <Redirect to={redirect} />;
    }
  };

  return <Route {...rest} render={render} />;
};

export default PrivateRoute;

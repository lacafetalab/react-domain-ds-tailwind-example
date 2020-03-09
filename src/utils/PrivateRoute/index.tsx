import React, { useState } from "react";
import {
  Route,
  Redirect,
  RouteComponentProps,
  useHistory
} from "react-router-dom";

const PrivateRoute: React.FC<any> = ({
  auth,
  redirect = "/",
  component: Component,
  loadingComponent: LoadingComponent = () => <></>,
  ...rest
}) => {
  const [status, setStatus] = useState("pending");
  const history = useHistory();

  auth
    .then((response: boolean) => {
      setStatus(response ? "resolved" : "rejected");
      console.log(response ? "resolved" : "rejected", { ...rest }.path);
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
      return <></>;
    }
  };

  if (status === "rejected") {
    history.push(redirect);
  }

  //console.log(status, { ...rest }.path, "2222222222");

  return <Route {...rest} render={render} />;
};

export default PrivateRoute;

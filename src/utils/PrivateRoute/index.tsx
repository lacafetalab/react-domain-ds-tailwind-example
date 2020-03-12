import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const usePrivateRoute = (auth: any) => {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    console.log("eeeeeeeeee");

    const fetchLogged = async () => {
      try {
        setStatus("pending");
        const response = await auth();
        console.log(response);
        if (response) {
          setStatus("resolved");
        } else {
          setStatus("rejected");
        }
      } catch (error) {
        setStatus("rejected");
      }
    };

    if (status === "idle") fetchLogged();
  }, []);

  console.log(window.location.href);

  return [status];
};

const PrivateRoute: React.FC<any> = ({
  auth,
  redirect = "/",
  component: Component,
  loadingComponent: LoadingComponent = () => <></>,
  ...rest
}) => {
  const [status] = usePrivateRoute(auth);

  return (
    <Route
      {...rest}
      render={props =>
        status === "resolved" ? (
          <Component {...props} />
        ) : status === "pending" || status === "idle" ? (
          <LoadingComponent />
        ) : (
          <Redirect to={redirect} />
        )
      }
    />
  );
};

export default PrivateRoute;

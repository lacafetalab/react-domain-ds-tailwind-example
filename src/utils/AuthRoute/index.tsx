import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface IProps {
  redirect?: string;
  loadingComponent?: any;
  isLoading?: boolean;
  isAuth?: boolean;
  component: any;
}

const AuthRoute: React.FC<IProps & RouteProps> = ({
  redirect = "/",
  component: Component,
  loadingComponent: LoadingComponent = () => <></>,
  isLoading = false,
  isAuth = false,
  ...rest
}) => {
  const render = (props: RouteProps) =>
    isLoading ? (
      <LoadingComponent />
    ) : isAuth ? (
      <Component {...props} />
    ) : (
      <Redirect to={redirect} />
    );

  return <Route {...rest} render={render} />;
};

export default AuthRoute;

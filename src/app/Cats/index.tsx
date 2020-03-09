import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "app/routes";
import CatsDetailContainer from "./Detail";
import CatsListContainer from "./List";

const CatsLayout: React.FC = () => {
  return (
    <Switch>
      <Route
        exact={true}
        path={`${routes.cats}/:id`}
        component={CatsDetailContainer}
      />
      <Route exact={true} path={routes.cats} component={CatsListContainer} />
    </Switch>
  );
};

export default CatsLayout;

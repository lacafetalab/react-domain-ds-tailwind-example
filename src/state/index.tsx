import React from "react";
import { UserProvider } from "./User/context";

const AppProvider: React.FC = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default AppProvider;

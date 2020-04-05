import React, { createContext, Dispatch, useReducer, useEffect } from "react";
import useDomain from "hooks/useDomain";
import { UserReducer, initState } from "./reducer";
import { UserActionsTypes, UserStateType, USER_UPDATE } from "./types";
import LoadingPage from "components/LoadingPage";

interface IUserContext {
  state: UserStateType;
  dispatch: Dispatch<UserActionsTypes>;
}

const UserContext = createContext<IUserContext>({
  state: initState,
  dispatch: () => null,
});

export const UserProvider: React.FC = ({ children }) => {
  const { isIdle, isLoading, data } = useDomain({
    initRun: ({ current_user_use_case }) => current_user_use_case.execute(),
  });

  const [state, dispatch] = useReducer(UserReducer, initState);

  useEffect(() => {
    const setUserData = () => {
      dispatch({
        type: USER_UPDATE,
        payload: data,
      });
    };

    if (data) setUserData();
  }, [data]);

  if (isIdle || isLoading) {
    return <LoadingPage />;
  }

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

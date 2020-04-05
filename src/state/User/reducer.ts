import { UserStateType, UserActionsTypes, USER_UPDATE } from "./types";

export const initState: UserStateType = {
  data: null,
  status: "idle",
};

export const UserReducer = (state: UserStateType, action: UserActionsTypes) => {
  switch (action.type) {
    case USER_UPDATE:
      return { ...state, data: { ...action.payload } };
    default:
      return state;
  }
};

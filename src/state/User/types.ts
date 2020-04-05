export const USER_UPDATE = "USER_UPDATE";

export type UserType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type StatusType = "idle" | "pending" | "success" | "error";

type UserUpdateAction = {
  type: typeof USER_UPDATE;
  payload: UserType;
};

export type UserStateType = {
  data: UserType | null;
  status: StatusType;
};

export type UserActionsTypes = UserUpdateAction;

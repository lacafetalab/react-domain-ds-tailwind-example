import { useContext } from "react";
import UserContext from "state/User/context";

const useUser = () => {
  const context = useContext(UserContext);
  const isSuccess = context.state.status === "success";
  const isError = context.state.status === "error";
  const isLoading =
    context.state.status === "idle" || context.state.status === "pending";

  return { ...context, isSuccess, isError, isLoading };
};

export default useUser;

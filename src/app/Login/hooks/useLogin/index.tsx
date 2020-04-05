import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useUser from "hooks/useUser";
import useDomain from "hooks/useDomain";
import { USER_UPDATE } from "state/User/types";

const useLogin = () => {
  const { register, handleSubmit, errors } = useForm();
  const { dispatch } = useUser();
  const { data, run, error, status } = useDomain();

  useEffect(() => {
    const setUserData = () => {
      dispatch({
        type: USER_UPDATE,
        payload: data,
      });
    };

    if (data) setUserData();
  }, [data, dispatch]);

  const onSubmit = handleSubmit(async ({ email, password }) => {
    run((domain) => domain.login_user_use_case.execute(email, password));
  });

  return {
    register,
    onSubmit,
    errors,
    sendStatus: status,
    sendError:
      status === "error"
        ? error?.response?.data?.error ?? "Error en el servidor"
        : null,
  };
};

export default useLogin;

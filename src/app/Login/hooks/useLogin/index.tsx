import { useForm } from "react-hook-form";
import { useState } from "react";
import _domain from "_domain";
import routes from "app/routes";
import { useHistory } from "react-router-dom";

type sendStatusType = "idle" | "pending" | "resolved" | "rejected";

const useLogin = () => {
  const { register, handleSubmit, errors } = useForm();
  const [sendStatus, setSendStatus] = useState<sendStatusType>("idle");
  const [sendError, setSendError] = useState(null);
  const history = useHistory();

  const onSubmit = handleSubmit(async ({ email, password }) => {
    setSendStatus("pending");
    setSendError(null);

    try {
      await _domain.login_user_use_case.execute(email, password);
      setSendStatus("resolved");

      history.replace(routes.home);
    } catch (e) {
      setSendStatus("rejected");
      setSendError(e?.response?.data?.error ?? "Error en el servidor");
    }
  });

  return {
    register,
    onSubmit,
    errors,
    sendStatus,
    sendError
  };
};

export default useLogin;

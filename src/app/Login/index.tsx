import React, { useState } from "react";
import useInput from "hooks/useInput";
import Login from "./Login";
import _domain from "_domain";
import { useHistory } from "react-router-dom";
import routes from "app/routes";

const LoginContainer: React.FC = () => {
  const [emailValue, bindEmail] = useInput("eve.holt@reqres.in");
  const [passValue, bindPassword] = useInput("cityslicka");
  const [error, setSerror] = useState<string>("");
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      await _domain.login_user_use_case.execute(
        emailValue as string,
        passValue as string
      );

      history.replace(routes.home);
    } catch (e) {
      setSerror(e?.response?.data?.error ?? "Error en el servidor");
    }
  };

  return (
    <Login
      handleSubmit={handleSubmit}
      email={{ value: emailValue, bind: bindEmail }}
      password={{ value: passValue, bind: bindPassword }}
      error={error}
    />
  );
};

export default LoginContainer;

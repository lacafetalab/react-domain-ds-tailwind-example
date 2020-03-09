import React from "react";
import { CcButton } from "@cafeta/components-react";
import TextField from "components/TextField";

interface IField {
  value: any;
  bind: any;
}

interface IProps {
  handleSubmit: () => void;
  email: IField;
  password: IField;
  error: string;
}

const Login: React.FC<IProps> = ({ handleSubmit, email, password, error }) => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-full max-w-md">
        <form
          className="bg-neutral-04 shadow-md rounded-sm px-xxlg pt-xlg pb-xxlg mb-lg"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="mb-lg">
            <TextField
              label="Email"
              placeholder="Email"
              error={!email.value ? "Please choose a email" : ""}
              {...email.bind}
            />
          </div>
          <div className="mb-xlg">
            <TextField
              label="Username"
              placeholder="··················"
              type="password"
              error={!password.value ? "Please choose a password" : ""}
              {...password.bind}
            />
          </div>

          {error && (
            <p className="text-error text-small-02 italic mb-lg">{error}</p>
          )}

          <div className="flex items-center">
            <CcButton size="md" onClick={handleSubmit}>
              Iniciar sesión
            </CcButton>
          </div>
        </form>
        <p className="text-center text-neutral-01 text-small-02">
          &copy;2020 CafetaLab. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;

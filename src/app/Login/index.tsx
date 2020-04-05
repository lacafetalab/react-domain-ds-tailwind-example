import React from "react";
import { CcButton } from "@cafeta/components-react";
import TextField from "components/TextField";
import useLogin from "./hooks/useLogin";

const Login: React.FC = () => {
  const { register, onSubmit, errors, sendStatus, sendError } = useLogin();

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-full max-w-md">
        <form
          className="bg-neutral-04 shadow-md rounded-sm px-xxlg pt-xlg pb-xxlg mb-lg"
          onSubmit={onSubmit}
        >
          <div className="mb-lg">
            <TextField
              label="Email"
              placeholder="Email"
              error={errors.email ? "Please choose a email" : ""}
              name="email"
              inputRef={register({ required: true })}
            />
          </div>
          <div className="mb-xlg">
            <TextField
              label="Password"
              placeholder="··················"
              type="password"
              name="password"
              error={errors.password ? "Please choose a password" : ""}
              inputRef={register({ required: true })}
            />
          </div>

          {sendStatus === "error" && (
            <p className="text-error text-small-02 italic mb-lg">{sendError}</p>
          )}

          <div className="flex items-center">
            <CcButton
              size="md"
              onClick={onSubmit}
              disabled={sendStatus === "pending"}
            >
              Sign In
            </CcButton>
          </div>
        </form>
        <p className="text-neutral-02 text-small-02">
          user: eve.holt@reqres.in
          <br />
          pass: cityslicka
        </p>
      </div>
    </div>
  );
};

export default Login;

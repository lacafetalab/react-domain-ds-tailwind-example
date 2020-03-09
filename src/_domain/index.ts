import { loginUserUseCase, currentUserUseCase } from "./User/UseCases";

const useCases = {
  login_user_use_case: loginUserUseCase(),
  current_user_use_case: currentUserUseCase()
};

export default useCases;

import LoginUserUseCase from "./LoginUserUseCase";
import { httpUserRepository } from "../Repositories";
import CurrentUserUseCase from "./CurrentUserUseCase";

const loginUserUseCase = () => new LoginUserUseCase(httpUserRepository());
const currentUserUseCase = () => new CurrentUserUseCase(httpUserRepository());

export { loginUserUseCase, currentUserUseCase };

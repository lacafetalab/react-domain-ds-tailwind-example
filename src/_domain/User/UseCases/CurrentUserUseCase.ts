import IUserRepository from "../Repositories/IUserRepository";
import ReactDOM from "react-dom";

export default class CurrentUserUseCase {
  private _userRepository: IUserRepository;

  constructor(UserRepository: IUserRepository) {
    this._userRepository = UserRepository;
  }

  public async execute() {
    const authEntity = await this._userRepository.current();
    return authEntity?.toJSON();
  }
}

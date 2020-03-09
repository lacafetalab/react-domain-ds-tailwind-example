import IUserRepository from "../Repositories/IUserRepository";

export default class LoginUserUseCase {
  private _userRepository: IUserRepository;

  constructor(UserRepository: IUserRepository) {
    this._userRepository = UserRepository;
  }

  public async execute(login: string, password: string) {
    const authEntity = await this._userRepository.login(login, password);

    return authEntity.toJSON();
  }
}

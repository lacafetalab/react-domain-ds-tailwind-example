import IUserRepository from "../Repositories/IUserRepository";

export default class LoginUserUseCase {
  private _userRepository: IUserRepository;

  constructor(UserRepository: IUserRepository) {
    this._userRepository = UserRepository;
  }

  public async execute(email: string, password: string) {
    const authEntity = await this._userRepository.login(email, password);

    return authEntity.toJSON();
  }
}

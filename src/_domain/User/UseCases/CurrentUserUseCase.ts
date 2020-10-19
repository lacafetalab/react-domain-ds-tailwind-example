import IUserRepository from "../Repositories/IUserRepository";

export default class CurrentUserUseCase {
  private _userRepository: IUserRepository;

  constructor(UserRepository) {
    this._userRepository = UserRepository;
  }

  public async execute() {
    const authEntity = await this._userRepository.current();
    return authEntity?.toJSON();
  }
}

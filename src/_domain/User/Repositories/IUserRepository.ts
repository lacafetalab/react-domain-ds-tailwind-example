import UserEntity from "../Entities/UserEntity";

export default interface IUserRepository {
  login(email: string, password: string): Promise<UserEntity>;
  current(): Promise<UserEntity | undefined>;
}

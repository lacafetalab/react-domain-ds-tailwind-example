import UserEntity, { IUserEntityParams } from "./UserEntity";

const userEntity = (params: IUserEntityParams) => new UserEntity({ ...params });

export { userEntity };

export interface IUserEntityParams {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default class UserEntity {
  private _id: string;
  private _email: string;
  private _firstName: string;
  private _lastName: string;
  private _avatar: string;

  constructor(params: IUserEntityParams) {
    this._id = params.id;
    this._email = params.email;
    this._firstName = params.first_name;
    this._lastName = params.last_name;
    this._avatar = params.avatar;
  }

  public toJSON() {
    return {
      id: this._id,
      email: this._email,
      firstName: this._firstName,
      lastName: this._lastName,
      avatar: this._avatar
    };
  }
}

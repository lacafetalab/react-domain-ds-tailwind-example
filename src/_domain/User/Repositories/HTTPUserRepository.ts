import { FetcherInstance } from "./../../Fetcher";
import IUserRepository from "./IUserRepository";
import { userEntity } from "../Entities";
import UserEntity from "../Entities/UserEntity";

export default class HTTPUserRepository implements IUserRepository {
  private _fetcher: FetcherInstance;
  private static _UserEntity: UserEntity;

  constructor(fetcher: FetcherInstance) {
    this._fetcher = fetcher;
  }

  public async login(email: string, password: string) {
    const { data } = await this._fetcher.post("/login", {
      email,
      password
    });

    this._fetcher.addToken(data.token);

    /* 
      aqui busco el user 1 porque esta api de prueba no permite obtener un usuario mediante un token
      lo regular seria llamar a los datos del usuario de una manera similar a esta this._fetcher.get("/user")
    */
    const {
      data: { data: userData }
    } = await this._fetcher.get("/users/1");

    const entity = userEntity(userData);

    localStorage.setItem("app.user.token", data.token);
    HTTPUserRepository._UserEntity = entity;

    return entity;
  }

  public async current() {
    const token = localStorage.getItem("app.user.token");

    if (!token) {
      return undefined;
    }

    if (HTTPUserRepository._UserEntity) {
      return HTTPUserRepository._UserEntity;
    }

    const {
      data: { data: userData }
    } = await this._fetcher.get("/users/1");

    const entity = userEntity(userData);

    return entity;
  }
}

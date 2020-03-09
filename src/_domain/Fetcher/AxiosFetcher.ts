import axios, { AxiosRequestConfig } from "axios";
import { AxiosInstance } from "axios";

export default class AxiosFetcher {
  private _fetcher: AxiosInstance;
  private _axiosConfig: AxiosRequestConfig | undefined;

  constructor(baseURL?: string) {
    this._axiosConfig = baseURL ? { baseURL } : undefined;

    this._fetcher = axios.create(this._axiosConfig);
  }

  public get get() {
    return this._fetcher.get;
  }

  public get post() {
    return this._fetcher.post;
  }

  public get patch() {
    return this._fetcher.patch;
  }

  public addToken(token: string) {
    this._fetcher.defaults.headers.common["Authorization"] = token;
  }
}

import config from "../config";
import AxiosFetcher from "./AxiosFetcher";

const httpFetcher = new AxiosFetcher(config.API_HOST);
const externalFetcher = new AxiosFetcher();

export type FetcherInstance = AxiosFetcher;
export { httpFetcher, externalFetcher };

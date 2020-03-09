import { httpFetcher } from "_domain/Fetcher";
import HTTPUserRepository from "./HTTPUserRepository";

const httpUserRepository = () => new HTTPUserRepository(httpFetcher);

export { httpUserRepository };

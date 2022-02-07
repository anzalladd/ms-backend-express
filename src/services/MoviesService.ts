import { IMovies } from "@/intefaces/IMovies";
import { Inject, Service } from "typedi";
import { Logger } from "winston";

@Service()
export default class MoviesService {
    constructor(
        @Inject("logger") public logger: Logger
      ) {}
    public async getAllMovies(): Promise<IMovies[]> {
    try {
        const movies: IMovies[] = [
            {
                id: 0,
                title: "Test",
                description: "Test",
                createdAt: "Test",
                updatedAt: "TEst",
            }
        ];
        return movies;
    } catch (e: any) {
      this.logger.error(e)
      throw new Error(e)
    } 
  }
}

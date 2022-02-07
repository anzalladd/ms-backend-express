import { Container } from "typedi";
import { entitiesResponse, CREATED_CODE, SUCCESS_CODE } from "@/helpers/constants/response";
import { asyncHandler } from "@/helpers/utils";
import { Wrapper } from "@/helpers/utils/Wrapper";
import { IMoviesInputDto } from "@/intefaces/IMovies";
import { Types } from "mongoose";

let functionname:string
export default class MoviesController {
  public static getAllData = asyncHandler(
    async (_req, res): Promise<any> => {
      functionname = 'movie_getAllData'
      try {
        const moviesInstance: any = Container.get("moviesService");
        const movies = await moviesInstance.getAllMovies();
        return res.send(movies).status(SUCCESS_CODE)
      } catch (e: any) {
        throw new Error(e);
      }
    }
  );
  public static postData = asyncHandler(
    async (req, res, next): Promise<any> => {
      functionname = 'movie_postData'
      const payload = {
        title: req.body.title,
        description: req.body.description,
      };
      const moviesInstance: any = Container.get("moviesService");
      const createdMovies = await moviesInstance.create(
        payload as IMoviesInputDto
      );
      return res.send(createdMovies).status(CREATED_CODE)
    }
  );

  public static getDataById = asyncHandler(
    async (req, res): Promise<any> => {
      functionname = 'movie_getDataById'
      const movieId = req.params.id;
      const moviesInstance: any = Container.get("moviesService");
      const movie = await moviesInstance.getMovieById(movieId);
      if (!movie) {
        throw new Wrapper(entitiesResponse.notFound).send(res);
      }
      return res.send(movie).status(SUCCESS_CODE)
    }
  );
  public static update = asyncHandler(
    async (req, res): Promise<any> => {
      functionname = 'movie_update'
      const movieId = req.params.id;
      const moviesInstance: any = Container.get("moviesService");
      const movie = await moviesInstance.getMovieById(movieId);
      if (!movie) {
        throw new Wrapper(entitiesResponse.noData).send(res);
      }
      const payload = {
        ...movie,
        ...req.body,
      };
      await moviesInstance.editMovie(
        new Types.ObjectId(movieId),
        payload as IMoviesInputDto
      );
      return res.send(payload).status(SUCCESS_CODE)
    }
  );
}

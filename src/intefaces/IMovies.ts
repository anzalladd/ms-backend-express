export interface IMoviesInputDto {
  title: string;
  description: string;
}

export interface IMovies {
  id: number;
  title: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

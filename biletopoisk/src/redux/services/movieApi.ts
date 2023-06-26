import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Movie {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], void>({ query: () => "movies" }),
    getMoviesInCinema: builder.query<Movie[], string>({
      query: (cinemaId) => `movies?cinemaId=${cinemaId}`,
    }),
    getMovie: builder.query<Movie, string>({ query: (movieId) => `movie?movieId=${movieId}` }),
  }),
});

export const { useGetMoviesQuery, useGetMoviesInCinemaQuery, useGetMovieQuery } = movieApi;

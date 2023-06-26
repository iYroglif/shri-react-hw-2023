import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovieReviews: builder.query<Review[], string>({
      query: (movieId) => `reviews?movieId=${movieId}`,
    }),
  }),
});

export const { useGetMovieReviewsQuery } = reviewApi;

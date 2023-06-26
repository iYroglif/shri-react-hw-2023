"use client";

import { useGetMovieReviewsQuery } from "@/redux/services/reviewApi";
import { Review } from "../Review/Review";
import { Loader } from "../Loader/Loader";
import { NotFound } from "../NotFound/NotFound";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const MovieReviews = ({ movieId }: { movieId: string }) => {
  const { data, isLoading, error } = useGetMovieReviewsQuery(movieId);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!data) {
    return <NotFound />;
  }

  return (
    <>
      {data.map(({ id, name, text, rating }) => (
        <Review key={id} name={name} text={text} rating={rating}></Review>
      ))}
    </>
  );
};

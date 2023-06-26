"use client";

import React from "react";
import { useGetMovieQuery } from "@/redux/services/movieApi";
import { GENRES } from "@/constants/genres";
import { Ticket } from "../Ticket/Ticket";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { NotFound } from "../NotFound/NotFound";

const MovieTicket = ({ movieId }: { movieId: string }) => {
  const { data, isLoading, error } = useGetMovieQuery(movieId);

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
    <Ticket
      id={data.id}
      imgUrl={data.posterUrl}
      title={data.title}
      description={GENRES[data.genre] ?? data.genre}
      link={`/movie/${data.id}`}
      withModal={true}
    />
  );
};

export const MovieTicketMemo = React.memo(MovieTicket);

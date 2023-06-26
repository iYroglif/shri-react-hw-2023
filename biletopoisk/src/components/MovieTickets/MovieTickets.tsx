"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { useGetMoviesInCinemaQuery, useGetMoviesQuery } from "@/redux/services/movieApi";
import { GENRES } from "@/constants/genres";
import {
  selectInputCinemaId,
  selectInputGenre,
  selectInputTitle,
} from "@/redux/features/filter/selector";
import { FilterState } from "@/redux/features/filter/FilterState";
import { Ticket } from "../Ticket/Ticket";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { NotFound } from "../NotFound/NotFound";

export const MovieTickets = ({ className }: { className?: string }) => {
  const inputTitle = useSelector((state: { filter: FilterState }) => selectInputTitle(state));
  const inputGenre = useSelector((state: { filter: FilterState }) => selectInputGenre(state));
  const inputCinemaId = useSelector((state: { filter: FilterState }) => selectInputCinemaId(state));
  const movies = useGetMoviesQuery();
  const moviesInCinema = useGetMoviesInCinemaQuery(inputCinemaId, {
    skip: inputCinemaId === "",
  });

  if (movies.isLoading || (inputCinemaId !== "" && moviesInCinema.isLoading)) {
    return <Loader />;
  }

  if (movies.error || (inputCinemaId !== "" && moviesInCinema.error)) {
    return <ErrorMessage />;
  }

  if (!movies.data || (inputCinemaId !== "" && !moviesInCinema.data)) {
    return <NotFound />;
  }

  let filteredMovies = movies.data;

  if (inputCinemaId !== "" && moviesInCinema.data) {
    filteredMovies = moviesInCinema.data;
  }

  filteredMovies = filteredMovies
    .filter((movie) => movie.title.toLowerCase().includes(inputTitle.toLowerCase()))
    .filter((movie) => inputGenre === "" || inputGenre === movie.genre);

  return (
    <div className={classNames(className, styles.root)}>
      {filteredMovies.length === 0 ? (
        <div className={styles.notFound}>
          Билеты по такому запросу не найдены. Измените фильтры и попробуйте снова
        </div>
      ) : (
        filteredMovies.map(({ id, posterUrl, title, genre }) => (
          <Ticket
            key={id}
            id={id}
            imgUrl={posterUrl}
            title={title}
            description={GENRES[genre] ?? genre}
            link={`/movie/${id}`}
          />
        ))
      )}
    </div>
  );
};

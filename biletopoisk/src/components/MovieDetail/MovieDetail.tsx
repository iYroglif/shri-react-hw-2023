"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import { GENRES } from "@/constants/genres";
import { useGetMovieQuery } from "@/redux/services/movieApi";
import { TicketCounterCompound } from "../TicketCounterCompound/TicketCounterCompound";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { NotFound } from "../NotFound/NotFound";

export const MovieDetail = ({ movieId }: { movieId: string }) => {
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

  const movieDetails = [
    { name: "Жанр: ", value: GENRES[data.genre] ?? data.genre },
    { name: "Год выпуска: ", value: data.releaseYear },
    { name: "Рейтинг: ", value: data.rating },
    { name: "Режиссер: ", value: data.director },
  ];

  return (
    <div className={styles.root}>
      <Image
        src={data.posterUrl}
        alt={data.title}
        width={400}
        height={500}
        className={styles.image}
      />

      <div className={styles.wrapper}>
        <div className={styles.movieInfo}>
          <div className={styles.firstRow}>
            <span className={styles.movieTitle}>{data.title}</span>
            <div>
              <TicketCounterCompound id={movieId}>
                <TicketCounterCompound.DecrementButton />
                <TicketCounterCompound.Count />
                <TicketCounterCompound.IncrementButton />
              </TicketCounterCompound>
            </div>
          </div>

          <div className={styles.details}>
            {movieDetails.map(({ name, value }) => (
              <span key={name}>
                <span className={styles.detailName}>{name}</span>
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.description}>
          <span className={styles.descriptionTitle}>Описание</span>
          <span className={styles.descriptionText}>{data.description}</span>
        </div>
      </div>
    </div>
  );
};

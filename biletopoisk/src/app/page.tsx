import styles from "./styles.module.css";
import { MovieTickets } from "@/components/MovieTickets/MovieTickets";
import { MoviesFilter } from "@/components/MoviesFilter/MoviesFilter";

export default function Home() {
  return (
    <div className={styles.root}>
      <MoviesFilter />
      <MovieTickets className={styles.tickets} />
    </div>
  );
}

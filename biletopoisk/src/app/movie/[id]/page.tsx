import styles from "./styles.module.css";
import { MovieDetail } from "@/components/MovieDetail/MovieDetail";
import { MovieReviews } from "@/components/MovieReviews/MovieReviews";

export default function Movie({ params }: { params: { id: string } }) {
  return (
    <div className={styles.root}>
      <MovieDetail movieId={params.id} />
      <MovieReviews movieId={params.id} />
    </div>
  );
}

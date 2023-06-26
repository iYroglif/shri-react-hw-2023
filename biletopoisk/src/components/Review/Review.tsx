import styles from "./styles.module.css";

export const Review = ({ name, text, rating }: { name: string; text: string; rating: number }) => {
  return (
    <div className={styles.root}>
      <div className={styles.image}></div>

      <div className={styles.review}>
        <div className={styles.firstRow}>
          <span className={styles.bold}>{name}</span>
          <span>
            Оценка: <span className={styles.bold}>{rating}</span>
          </span>
        </div>

        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

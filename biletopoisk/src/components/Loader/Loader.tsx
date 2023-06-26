import styles from "./styles.module.css";

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div>Загрузка </div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

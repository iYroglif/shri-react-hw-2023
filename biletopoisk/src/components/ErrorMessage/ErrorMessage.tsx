import styles from "./styles.module.css";

export const ErrorMessage = () => {
  return (
    <div className={styles.root}>
      Произошла ошибка при загрузке данных. Попробуйте обновить страницу
    </div>
  );
};

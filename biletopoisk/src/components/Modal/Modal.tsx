import styles from "./styles.module.css";

export const Modal = ({ onAccept, onDecline }: { onAccept: () => void; onDecline: () => void }) => {
  return (
    <div onClick={onDecline} className={styles.root}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.title}>
            <span>Удаление билета</span>
            <div onClick={onDecline} className={styles.close}></div>
          </div>

          <span className={styles.text}>Вы уверены, что хотите удалить билет?</span>
        </div>

        <div className={styles.buttons}>
          <button onClick={onAccept} className={styles.accept}>
            Да
          </button>

          <button onClick={onDecline} className={styles.decline}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

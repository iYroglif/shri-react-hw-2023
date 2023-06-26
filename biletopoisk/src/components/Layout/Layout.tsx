import styles from "./styles.module.css";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <div className={styles.content}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

import classNames from "classnames";
import styles from "./styles.module.css";
import Link from "next/link";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={classNames(className, styles.root)}>
      <Link href="/questions">Вопросы-ответы</Link>
      <Link href="/about">О нас</Link>
    </footer>
  );
};

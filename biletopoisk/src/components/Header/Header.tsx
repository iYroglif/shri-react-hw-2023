import classNames from "classnames";
import styles from "./styles.module.css";
import Link from "next/link";
import { Cart } from "../Cart/Cart";

export const Header = ({ className }: { className?: string }) => {
  return (
    <header className={classNames(className, styles.root)}>
      <Link href="/">
        <span className={styles.title}>Билетопоиск</span>
      </Link>

      <Link href="/cart">
        <Cart />
      </Link>
    </header>
  );
};

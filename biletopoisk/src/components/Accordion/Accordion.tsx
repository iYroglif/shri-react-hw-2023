"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import { useCallback, useState } from "react";

export const Accordion = ({
  title,
  content,
  defaultOpen,
}: {
  title: string;
  content: string;
  defaultOpen: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const handleClick = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

  return (
    <div className={styles.root}>
      <div className={styles.accordion}>
        <span onClick={handleClick} className={styles.title}>
          {title}
        </span>
        <span className={classNames(styles.content, { [styles.show]: isOpen })}>{content}</span>
      </div>

      <div
        onClick={handleClick}
        className={classNames(styles.icon, { [styles.open]: isOpen })}
      ></div>
    </div>
  );
};

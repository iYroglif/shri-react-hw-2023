"use client";

import styles from "./styles.module.css";
import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "@/redux/features/filter";
import { debounce } from "./debounce";

export const TitleInput = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const setInputTitle = useCallback(
    (value: string) => dispatch(filterActions.setInputTitle(value)),
    [dispatch]
  );
  const debouncedSetInputTitle = useMemo(() => debounce(setInputTitle, 300), [setInputTitle]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    debouncedSetInputTitle(event.target.value);
  };

  return (
    <input
      value={inputValue}
      onChange={handleChange}
      className={styles.input}
      placeholder="Введите название"
    />
  );
};

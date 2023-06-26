"use client";

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterState } from "@/redux/features/filter/FilterState";
import { selectInputGenre } from "@/redux/features/filter/selector";
import { filterActions } from "@/redux/features/filter";
import { Dropdown } from "../Dropdown/Dropdown";
import { GENRES } from "@/constants/genres";

export const GenreDropdown = () => {
  const inputGenre = useSelector((state: { filter: FilterState }) => selectInputGenre(state));
  const dispatch = useDispatch();
  const setInputGenre = useCallback(
    (inputGenre: string) => dispatch(filterActions.setInputGenre(inputGenre)),
    [dispatch]
  );

  return (
    <Dropdown value={GENRES[inputGenre] ?? inputGenre} onChange={setInputGenre}>
      <Dropdown.Select placeholder={"Выберите жанр"} />
      <Dropdown.Options>
        <Dropdown.Item value={""}>Не выбран</Dropdown.Item>
        {Object.entries(GENRES).map(([key, value]) => (
          <Dropdown.Item key={key} value={key}>
            {value}
          </Dropdown.Item>
        ))}
      </Dropdown.Options>
    </Dropdown>
  );
};

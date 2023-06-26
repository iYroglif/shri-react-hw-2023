"use client";

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectInputCinemaId } from "@/redux/features/filter/selector";
import { filterActions } from "@/redux/features/filter";
import { useGetCinemasQuery } from "@/redux/services/cinemaApi";
import { FilterState } from "@/redux/features/filter/FilterState";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { NotFound } from "../NotFound/NotFound";
import { Dropdown } from "../Dropdown/Dropdown";

export const CinemaDropdown = () => {
  const { data, isLoading, error } = useGetCinemasQuery();
  const inputCinemaId = useSelector((state: { filter: FilterState }) => selectInputCinemaId(state));
  const dispatch = useDispatch();
  const setInputCinemaId = useCallback(
    (inputCinemaId: string) => dispatch(filterActions.setInputCinemaId(inputCinemaId)),
    [dispatch]
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!data) {
    return <NotFound />;
  }

  return (
    <Dropdown
      value={data.find(({ id }) => id === inputCinemaId)?.name ?? ""}
      onChange={setInputCinemaId}
    >
      <Dropdown.Select placeholder={"Выберите кинотеатр"} />
      <Dropdown.Options>
        <Dropdown.Item value={""}>Не выбран</Dropdown.Item>
        {data.map(({ id, name }) => (
          <Dropdown.Item key={id} value={id}>
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown.Options>
    </Dropdown>
  );
};

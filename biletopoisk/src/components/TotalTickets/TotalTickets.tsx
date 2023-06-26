"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectProductsAmount } from "@/redux/features/cart/selector";
import { CartState } from "@/redux/features/cart/CartState";

export const TotalTickets = ({ className }: { className?: string }) => {
  const ticketsAmount = useSelector((state: { cart: CartState }) => selectProductsAmount(state));

  return (
    <div className={classNames(className, styles.root)}>
      <span>Итого билетов:</span>
      <span>{ticketsAmount}</span>
    </div>
  );
};

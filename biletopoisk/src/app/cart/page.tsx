"use client";

import styles from "./styles.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { selectProductsIds } from "@/redux/features/cart/selector";
import { MovieTicketMemo } from "@/components/MovieTicket/MovieTicket";
import { TotalTickets } from "@/components/TotalTickets/TotalTickets";
import { CartState } from "@/redux/features/cart/CartState";
import Link from "next/link";

export default function Cart() {
  const moviesIds = useSelector((state: { cart: CartState }) => selectProductsIds(state));

  return (
    <div className={styles.root}>
      <div className={styles.tickets}>
        {moviesIds.length === 0 ? (
          <div className={styles.empty}>
            Вы пока еще не положили в корзину ни одного билета. Так сделайте это на главной странице
            по этой{" "}
            <Link href="/" className={styles.link}>
              ссылке
            </Link>
          </div>
        ) : (
          moviesIds.map((movieId) => <MovieTicketMemo key={movieId} movieId={movieId} />)
        )}
      </div>

      <TotalTickets className={styles.total} />
    </div>
  );
}

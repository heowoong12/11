import { useState } from "react";
import React from "react";
import styles from "./Listitem.module.css";
import Buttons from "./Buttons";
import Slide from "./Slide";
import "./Buttons.module.css";

export default function Listitem(props, { hidden, onChangeHidden }) {
  return (
    <span>
      <Buttons />

      <span className={styles.wrapper}>
        <input
          type="hidden"
          className={styles.hidden}
          value={hidden}
          onChange={onChangeHidden}
        />
        <span>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.description}>{props.type}</span>
        </span>
        <p className={styles.comment}>3</p>
        <p className={styles.date}>2022.10.05</p>
      </span>
    </span>
  );
}

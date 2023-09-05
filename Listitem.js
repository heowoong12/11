import { useState } from "react";
import styles from "./Listitem.module.css";
import Buttons from "./Buttons";
import "./Buttons.module.css";

export default function Listitem({ hidden, onChangeHidden }) {
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
          <span className={styles.title}></span>
          <span className={styles.description}></span>
        </span>
        <p className={styles.comment}>+3</p>
        <p className={styles.date}>22.10.05</p>
      </span>
    </span>
  );
}

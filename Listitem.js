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
          <span className={styles.title}>[딥페이크]</span>
          <span className={styles.description}>
            내 얼굴이 여기저기 도용당했어요.
          </span>
        </span>
        <p className={styles.comment}>+3</p>
        <p className={styles.date}>22.10.05</p>
      </span>
    </span>
  );
}

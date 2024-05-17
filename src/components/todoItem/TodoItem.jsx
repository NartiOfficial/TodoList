import { Button } from "../button/Button";
import styles from "./TodoItem.module.css";

export function TodoItem({ name, done }) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {!done && <Button>Zrobione</Button>}
      <Button>Usuń</Button>
    </li>
  );
}

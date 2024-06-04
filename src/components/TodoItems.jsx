import React from "react";
import styles from "../css/todoitems.module.css";

export default function TodoItems({ item, todoList, setTodoList }) {
  
  function handleDelete(item) {
    console.log(item, "deleted");
    console.log((todoList.filter((todo) => todo !== item)));

  }

  return (
    <div className={styles.itemsdiv}>
      <div className={styles.items}>
        <span className={styles.span}>{item}</span>
        <button onClick={() => handleDelete(item)} className={styles.button}>
          Delete
        </button>
      </div>
    </div>
  );
}

import React from "react";
import styles from "../css/todoitems.module.css";

export default function TodoItems({ item, todoList, setTodoList }) {
  function handleDelete(item) {
    console.log(item, "deleted");
    setTodoList(todoList.filter((todo) => todo !== item));
  }

  function handleClick(name){
    console.log(name ," clicked")
    const newArray = todoList.map((todo) =>
      todo.name === name ? {...todo, done:!todo.done} : todo
    );
    setTodoList(newArray);
  }

  const finishedTodo = item.done ? styles.completed : "";

  return (
    <div className={styles.itemsdiv}>
      <div className={styles.items}>
        <span onClick={()=> handleClick(item.name)} className={styles.span}>
          <span  className={finishedTodo} >{item.name}</span>
        </span>
        <button onClick={() => handleDelete(item)} className={styles.button}>
          Delete
        </button>
      </div>
    </div>
  );
}

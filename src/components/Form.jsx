import React from "react";
import { useState } from "react";
import styles from "../css/form.module.css";

export default function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState({name:"", done:false});


  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo({name:"", done:false});
  }
  return (
    <div className={styles.formdiv}>
      <form
      className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.forminput}
          type="text"
          placeholder="Todo item"
          onChange={(e) => setTodo({name:e.target.value, done:false})}
          value={todo.name}
        />
        <button 
        className={styles.addbtn}
        type="submit">
          <span className={styles.buttoncontent}>
            Add
          </span>
        </button>
      </form>
    </div>
  );
}

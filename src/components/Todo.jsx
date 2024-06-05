import React, { useState } from "react";
import Form from "./Form";
import TodoDisplay from "./TodoDisplay";
import Footer from "./Footer";
// import Form from "./Form";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  const completedTodos = todoList.filter((todo)=> todo.done).length;
  const totalTodos = todoList.length;

  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList}  />
      <TodoDisplay todoList={todoList} setTodoList={setTodoList}/>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}

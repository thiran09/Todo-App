import React, { useState } from "react";
import Form from "./Form";
import TodoDisplay from "./TodoDisplay";
// import Form from "./Form";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList}  />
      <TodoDisplay todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

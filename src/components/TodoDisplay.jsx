import React from "react";
import TodoItems from "./TodoItems"

export default function TodoDisplay ({todoList, setTodoList}) {
  return (
    <>
      {todoList.map((item) => (
        <TodoItems key={item.name} item={item.name} todoList={todoList} setTodoList={setTodoList} />
      ))}
    </>
  );
}

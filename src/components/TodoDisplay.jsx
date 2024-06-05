import React from "react";
import TodoItems from "./TodoItems";

export default function TodoDisplay({ todoList, setTodoList }) {
  const sortedTodos = todoList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <>
      {sortedTodos.map((item) => (
        <TodoItems
          key={item.name}
          item={item}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </>
  );
}

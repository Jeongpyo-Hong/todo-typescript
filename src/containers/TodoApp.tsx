import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../modules/todos";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";

const TodoApp = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (todo: string) => {
    dispatch(addTodo(todo));
  };
  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default TodoApp;

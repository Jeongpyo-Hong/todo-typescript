import React, { useState } from "react";

type TodoInsertProps = {
  onInsert: (todo: string) => void;
};

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [todo, setTodo] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInsert(todo);
    setTodo("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요."
          value={todo}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
    </>
  );
};

export default TodoInsert;

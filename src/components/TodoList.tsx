import { Todo } from "../modules/todos";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;

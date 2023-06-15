// 액션 타입 선언
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

// todo 추가 시 사용할 고유 id값
let nextId = 1;

// 액션 함수 선언
export const addTodo = (todo: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    todo,
  },
});
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});
export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

// 모든 액션 객체들의 대한 타입 준비
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

// 상태에서 사용할 할 일 항목 데이터 타입 정의
export type Todo = {
  id: number;
  todo: string;
  done: boolean;
};

// 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
export type TodosState = Todo[];

// 초기 상태 선언
const initialState: TodosState = [];

// 리듀서 생성
const todos = (state: TodosState = initialState, action: TodosAction) => {
  switch (action.type) {
    case "todos/ADD_TODO":
      return [...state, action.payload];
    case "todos/TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? (todo.done = !todo.done) : todo
      );
    case "todos/REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todos;

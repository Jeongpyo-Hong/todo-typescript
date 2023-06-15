/**
 * 액션 타입 선언
 */
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

/**
 * 액션 생성함수 선언
 */
export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

type CounterState = {
  count: number;
};

/**
 * 초기 상태 선언
 */
const initialState: CounterState = {
  count: 0,
};

/**
 * 리듀서 작성
 */
const counter = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case "counter/INCREASE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "counter/DECREASE":
      return {
        ...state,
        count: state.count - 1,
      };
    case "counter/INCREASE_BY":
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

export default counter;

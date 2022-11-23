import React, { useReducer } from "react";

const initialState = { count: 0 };
type counterState = {
  count: number;
};

const INCREMENT = "INCREMENT";
const INCREMENTBYAMOUNT = "INCREMENTBYAMOUNT";
const RESET = "RESET";
const DECREMENT = "DECREMENT";

type IncrementActionType = { type: typeof INCREMENT };
type IncrementByAmountActionType = {
  type: typeof INCREMENTBYAMOUNT;
  payload: number;
};
type ResetActionType = { type: typeof RESET };
type DecrementActionType = { type: typeof DECREMENT };

type counterActionType =
  | IncrementActionType
  | DecrementActionType
  | ResetActionType
  | IncrementByAmountActionType;

const reducer = (state: counterState, action: counterActionType) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case INCREMENTBYAMOUNT:
      return { count: state.count + action.payload };
    case RESET:
      return { count: 0 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1> Count : {state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: INCREMENT });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: INCREMENTBYAMOUNT, payload: 5 });
        }}
      >
        IncrementByAmount
      </button>
      <button
        onClick={() => {
          dispatch({ type: RESET });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;

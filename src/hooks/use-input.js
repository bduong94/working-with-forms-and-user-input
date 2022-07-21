// import { useState } from "react";
import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatchInputState] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  //Validity Checks for Value
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatchInputState({ type: "INPUT", value: e.target.value });
    // setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    dispatchInputState({ type: "BLUR" });
    // setIsTouched(true);
  };

  const reset = () => {
    dispatchInputState({ type: "RESET" });
    // setEnteredValue("");
    // setIsTouched(false);
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

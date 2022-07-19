import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  // return {
  //   value: enteredValue,
  //   isValid: valueIsValid,
  //   hasError,
  //   valueChangeHandler,
  //   inputBlurHandler,
  //   reset,
  // };

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameInputReset,
  } = useInput((value) => value.trim() !== "");

  const firstNameClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredFirstNameIsValid) {
      return;
    }

    firstNameInputReset();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">First Name must not be empty!</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

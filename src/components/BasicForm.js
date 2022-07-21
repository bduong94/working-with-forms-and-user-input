import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  const disableButton =
    !enteredFirstNameIsValid && !enteredLastNameIsValid && !enteredEmailIsValid;

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredFirstNameIsValid & !enteredLastNameIsValid) {
      return;
    }

    firstNameInputReset();
    lastNameInputReset();
  };

  //Classes for Inputs
  const firstNameClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClass = emailHasError ? "form-control invalid" : "form-control";

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
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
        {emailHasError && (
          <p className="error-text">E-mail must include an @!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={disableButton}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

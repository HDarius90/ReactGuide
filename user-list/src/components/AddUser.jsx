import style from "./AddUser.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import { useState, useRef } from "react";

export default function UserForm({ addUser }) {
  const enteredName = useRef();
  const enteredAge = useRef();

  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const username = enteredName.current.value;
    const age = enteredAge.current.value;
    if (username.trim().length === 0 || age.trim().length === 0) {
      return setErrorMessage("Please enter a valid age (>0).");
    }
    if (+age < 1) {
      return;
    } else {
      addUser(`${username} (${age} years old)`);
      enteredName.current.value = "";
      enteredAge.current.value = "";
    }
  };

  const removeError = () => {
    setErrorMessage("");
  };

  return (
    <>
      <form onSubmit={submitHandler} className={style.input}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          ref={enteredName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          ref={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
      {errorMessage && (
        <ErrorModal msg={errorMessage} onDismiss={removeError} />
      )}
    </>
  );
}

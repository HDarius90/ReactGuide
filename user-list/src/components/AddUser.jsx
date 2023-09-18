import style from "./AddUser.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import { useState } from "react";

export default function UserForm({ addUser }) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (age > 0) {
      addUser(`${username} (${age} years old)`);
    } else {
      setErrorMessage("Please enter a valid age (>0).");
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
          value={username}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <Button text="Add User" />
      </form>
      {errorMessage && (
        <ErrorModal msg={errorMessage} onDismiss={removeError} />
      )}
    </>
  );
}

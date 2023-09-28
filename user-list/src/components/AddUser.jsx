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
    if (username.trim().length === 0 || age.trim().length === 0) {
      return setErrorMessage("Please enter a valid age (>0).");
    }
    if (+age < 1) {
      return;
    } else {
      addUser(`${username} (${age} years old)`);
      setUsername("");
      setAge("");
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
        <Button type="submit">Add User</Button>
      </form>
      {errorMessage && (
        <ErrorModal msg={errorMessage} onDismiss={removeError} />
      )}
    </>
  );
}

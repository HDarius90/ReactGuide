import style from "./AddUser.module.css";
export default function UserForm() {
  return (
    <div className={style.form}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
    </div>
  );
}

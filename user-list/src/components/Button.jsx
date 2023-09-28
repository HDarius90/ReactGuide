import style from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      className={style.button}
      onClick={props.clickHandler}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}

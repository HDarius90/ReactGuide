import style from "./Button.module.css";
export default function Button ({text, clickHandler}) {
    return (
        <button className={style.button} onClick={clickHandler}>{text}</button>
    )
}
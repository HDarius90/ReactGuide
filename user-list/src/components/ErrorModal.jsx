import style from "./ErrorModal.module.css";
import Button from "./Button";

export default function ErrorModal({ msg, onDismiss }) {
  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <div className={style.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={style.content}>{msg}</div>
        <div className={style.actions}>
          <Button clickHandler={onDismiss}>Okay</Button>
        </div>
      </div>
    </div>
  );
}

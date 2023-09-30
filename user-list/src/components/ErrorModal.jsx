import style from "./ErrorModal.module.css";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={style.backdrop}>{props.children}</div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.header}>
        <h2>Invalid input</h2>
      </div>
      <div className={style.content}>{props.msg}</div>
      <div className={style.actions}>
        <Button clickHandler={props.onDismiss}>Okay</Button>
      </div>
    </div>
  );
};

export default function ErrorModal({ msg, onDismiss }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay msg={msg} onDismiss={onDismiss} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

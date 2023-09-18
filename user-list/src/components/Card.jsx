import style from "./Card.module.css";
export default function Card({ text }) {
  return <div className={style.card}>{text}</div>;
}

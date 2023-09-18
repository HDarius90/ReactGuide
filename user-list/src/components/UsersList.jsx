import style from "./UsersList.module.css";
import Card from "./Card";
export default function UsersList({ listItems }) {
  return (
    <div className={style.users}>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            <Card text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

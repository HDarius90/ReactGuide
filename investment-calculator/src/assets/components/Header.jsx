import styles from "./Header.module.css";
export default function Header(props) {
  return (
    <header className={styles.header}>
      <img src={props.logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

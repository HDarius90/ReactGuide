import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem({ expenses }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={expenses.date} />
      <div className="expense-item__description">
        <h2>{expenses.title}</h2>
        <div className="expense-item__price">${expenses.amount}</div>
      </div>
    </div>
  );
}

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem({ expenses }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenses.date} />
      <div className="expense-item__description">
        <h2>{expenses.title}</h2>
        <div className="expense-item__price">${expenses.amount}</div>
      </div>
    </Card>
  );
}
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

export default function Expenses({expenses}) {
  return (
    <div className="expenses">
      <ExpenseItem expenses={expenses[0]} />
      <ExpenseItem expenses={expenses[1]} />
      <ExpenseItem expenses={expenses[2]} />
      <ExpenseItem expenses={expenses[3]} />
    </div>
  );
}

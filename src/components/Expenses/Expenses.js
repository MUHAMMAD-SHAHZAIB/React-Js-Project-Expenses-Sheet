import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFiltererYeard] = useState("2022");
  const filterChangeHandler = selectedYear => {
    setFiltererYeard(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {props.items.map((abc) => (
        <ExpenseItem  key={abc.id} title={abc.title} amount={abc.amount} date={abc.date} />
      ))}
    </Card>
  );
}

export default Expenses;

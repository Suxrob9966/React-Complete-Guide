import Card from "../UI/Card"; // go up one folder and then go into UI folder
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // console.log(typeof selectedYear, typeof props.items[0].date.getFullYear());
  const filteredExpense = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilterHandler={expenseFilterHandler}
        />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;

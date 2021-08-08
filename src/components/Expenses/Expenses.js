import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"; // go up one folder and then go into UI folder
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilterHandler={expenseFilterHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

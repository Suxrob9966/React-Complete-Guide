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

  // console.log(typeof selectedYear, typeof props.items[0].date.getFullYear());
  const filteredExpense = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No expenses for output</p>; //style={{ color: "white" }} for inline styling put this code into <p> tag

  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id} // we need id for performance, without id react will visit every element when rendering the list
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilterHandler={expenseFilterHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;

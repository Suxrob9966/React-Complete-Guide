import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"; // go up one folder and then go into UI folder
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import React, { useState } from "react";

const Expenses = (props) => {
  //   const expensesItems = props.items.map((item) => (
  //     <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
  //   ));    // same with the bottom one
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
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>

        {/* {expensesItems} */}
      </Card>
    </div>
  );
};

export default Expenses;

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Chart from "./components/Chart/Chart";
import React, { useState } from "react";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  // if we use React object instead of JSX
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement("p", {}, "This is also visible. Very good"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
    setExpenses((prevState) => [expense, ...prevState]);
    // setExpenses([...dummyExpenses, expense]);// the same as above but not safer
  };

  return (
    <div>
      {/* <button type="submit">Add New Expense</button> */}
      <NewExpense onAddExpense={addExpenseHandler} />

      {/*we pass expenses array elements as attributes into custom defined element ExpenseItem. the attribute names can be anything. But in ExpenseItem.js file we will have to access these attributes by these names. In that file these attributes will be stored as function parameter called props. We then acccess every attribute element as props[0].title for example.*/}
      <Chart />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;

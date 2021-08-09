import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React /*, { useState }*/ from "react";

const ExpenseItem = (props) => {
  /* // NOTE: ALL THE COMMENTED OUT SECTIONS WORK TOGETHER TO SHOW USESTATE
  const [title, setTitle] = useState(props.title); // we pass the element to be changed as a parameter into useState() function. This function always returns an array where first element is the current state value and the second element is the function for updating that element

  const clickHandler = () => {
    setTitle("Updated!");
    // console.log(title);
  };*/

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;

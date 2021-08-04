import "./ExpenseItem.css";

const ExpenseItem = function () {
  const expenseDate = new Date(2021, 6, 4);
  const expenseTitle = "Tuition fee";
  const expenseAmount = 3880.0;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">$ {expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

import "./ExpenseItem.css";

const ExpenseItem = function () {
  return (
    <div className="expense-item">
      <div>August 4th 2021</div>
      <div className="expense-item__description">
        <h2>Tuition fee</h2>
        <div className="expense-item__price">$3880.00</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

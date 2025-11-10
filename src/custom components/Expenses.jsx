import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  
  return (
    props.expenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
          ></ExpenseItem>
      );
    })
  )
}
export default Expenses;
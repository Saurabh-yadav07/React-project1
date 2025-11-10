import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import './Expenses.css'
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            id={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}/>
        )
      })}
    </Card>
  )
}
export default Expenses;

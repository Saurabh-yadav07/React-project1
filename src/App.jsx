import Expenses from "./custom components/Expenses";
const expenses = [
  { id: '1', date: new Date(2023, 7, 15), title: 'Insurance', price: 100 },
  { id: '2', date: new Date(2023, 1, 14), title: "Pen", price: 50 },
  { id: '3', date: new Date(2023, 8, 12), title: 'Book', price: 99 },
  {id:'4',date:new Date(2025,6,29),title:'Laptop',price:250}
]
function App() {
 
  return (
    <div>
      <h1>Let's get Started</h1>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;

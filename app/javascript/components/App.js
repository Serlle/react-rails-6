import React from "react"
import Expense from "./Expenses/Expense";

const App = () => {
  const expense = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14), },
    { id: 'e2', title: 'New Tv', amount: 799.49, date: new Date(2021, 2, 12) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) }
  ];

  return (
    <React.Fragment>
      <div>
        <h2>Let's get started!</h2>
        <Expense 
          items={expense}
        />
      </div>
    </React.Fragment>
  );
}

export default App
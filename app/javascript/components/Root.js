import React from "react"
import ExpenseItem from "./ExpenseItem";

function Root() {
  return (
    <React.Fragment>
      <div>
        <h2>Let's get started!</h2>
        <ExpenseItem></ExpenseItem>
      </div>
    </React.Fragment>
  );
}

export default Root
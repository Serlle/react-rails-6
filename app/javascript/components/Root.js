import React from "react"
import ExpenseItem from "./ExpenseItem";

class Root extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <h2>Let's get started!</h2>
          <ExpenseItem></ExpenseItem>
        </div>
      </React.Fragment>
    );
  }
}

export default Root
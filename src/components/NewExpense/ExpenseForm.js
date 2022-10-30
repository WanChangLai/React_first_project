import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = () =>{
  const [enteredTitle,setEnteredTitle] =useState("");
  const [enteredAmount,setEnteredAmount]=useState("");
  const [enteredDate,setEnteredDate]=useState("");

//   const [userInput,setUserInput] = useState({
//     enteredTitle:"",
//     enteredAmount:"",
//     enteredDate:""
//   });

  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     //...userInput remains all thing in userInput but overwrite enteredTitle//
    //     ...userInput,
    //     enteredTitle:event.target.value, 
    // });
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value};
    // });
  };

  const amountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value, 
    // })
    // setUserInput((prevState)=>{
    //     return{...prevState,enteredAmount:event.target.amount};
    // })
  };

  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value, 
    // })
  };

  const submitHandler = (event) =>{
    //prevent this request to send//
    event.preventDefault();

    const ExpenseData = {
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    };

    //after submit button trigger, set it to empty string//
    console.log(ExpenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return ( 
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" value={enteredAmount} step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2025-12-31" value={enteredDate} onChange={dateChangeHandler}/>
             </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
     </form>
  );
};


export default ExpenseForm;
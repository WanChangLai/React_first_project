import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  //title is the thing we want to change//
  //settitle is the thing we change to //
  const [title,setTitle] = useState(props.title);

  const clickHandler = () =>{
    setTitle('Updated');
    //still get the title for the first time of code running//
    //change it second time//
    console.log(title);
  };

  return (
    <Card className='expense-item'>
        <ExpenseDate date ={props.date} />    
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

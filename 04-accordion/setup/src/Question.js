import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({dataItem}) => {
  // const [btn,]

  const {id,title,info} = dataItem
  return (
    <>
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn">
          <span><AiOutlineMinus/></span>
          <span><AiOutlinePlus/></span>
          </button>
      </header>
      <p>{info}</p>
    </div>
    </>
  )
};

export default Question;

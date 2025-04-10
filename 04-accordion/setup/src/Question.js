import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({dataItem}) => {
  const [isMinus,setIsMinus] = useState(false)

  function showMore(){
    isMinus?setIsMinus(false):setIsMinus(true)
  }

  const {id,title,info} = dataItem
  return (
    <>
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={showMore}>
          {isMinus?
          <span><AiOutlineMinus/></span>:
          <span><AiOutlinePlus/></span>}
          </button>
      </header>
      {isMinus?<p>{info}</p>:null}
    </article>
    </>
  )
};

export default Question;

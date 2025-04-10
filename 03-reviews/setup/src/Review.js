import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0)
  const person = people[index];
  const {id,name,job,image,text} = person

  function prevBtn(){
    if(index===0){
      setIndex(people.length-1)
    }else{
      setIndex(index-1)
    }
    
  }
  function nextBtn(){
    if(index===people.length-1){
      setIndex(0)
    }else{
      setIndex(index+1)
    }
  }
  function randomBtn(){
    const num= Math.floor(Math.random()*people.length)
    console.log(num);
    setIndex(num)
  }
  return (
    <>

          <article key={id} className='review'>
            <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            </div>
            <h2>{name}</h2>
            <p>{job}</p>
            <p>{text}<FaQuoteRight/></p>
            <button className='prev-btn' onClick={prevBtn}><FaChevronLeft/></button>
            <button className='next-btn' onClick={nextBtn}><FaChevronRight/></button>
            <button className='random-btn' onClick={randomBtn}>Random</button>
          </article>

       
    </>
  )
};

export default Review;

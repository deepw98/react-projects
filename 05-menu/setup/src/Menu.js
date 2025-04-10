import React from 'react';

const Menu = ({items}) => {
  return (
    <>
      {items.map((item)=>{
        const {id,title,category,price,img,desc} = item
        return(
          <article className='item' key={id}>
            <h2 className='title'>{title}</h2>
            <img src={img} alt={title} className='photo' />
            <h3>{category}</h3>
            <h3>{price}</h3>
            <p>{desc}</p>
          </article>
        )
      })}
    </>
  )
};

export default Menu;

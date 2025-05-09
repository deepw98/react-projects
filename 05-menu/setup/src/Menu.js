import React from 'react';

const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((item)=>{
        const {id,title,price,img,desc} = item
        return(
          <article className='menu-item' key={id}>
            <img src={img} alt={title} className='photo' />
            <div className="item-info">
              <header>
              <h4 className='title'>{title}</h4>
              <h4>{price}</h4>
              </header>
              <p>{desc}</p>
            </div>
            
          </article>
        )
      })}
    </div>
  )
};

export default Menu;

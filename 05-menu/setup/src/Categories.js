import React from 'react';
import Menu from './Menu'

const Categories = ({items}) => {

  function filterItems(category){
    if(items.category===category){
      console.log(items)
      // return <Menu items={newItems}/>
    }
  }
  const categories = ['all',...new Set(items.map((item)=>item.category))]
  return(
    <>
      {categories.map((category,index)=>{
        return(
          <div className="btn-container" key={index}>
              <button  className='filter-btn'  onClick={filterItems}>{category}</button>
          </div>
          
        )
      })}
    </>
  )
};

export default Categories;

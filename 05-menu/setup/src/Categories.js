import React,{useState} from 'react';
import Menu from './Menu'

const Categories = ({items}) => {
  const [filteredItems,setFilteredItems] = useState(items)

  function filterItems(category){
   if(category==='all'){
    setFilteredItems(items);
    return
   }
   const newItems = items.filter((item)=>item.category===category);
   setFilteredItems(newItems)
  }
  const categories = ['all',...new Set(items.map((item)=>item.category))]
  return(
    <>
        <div className='btn-container'>
            {categories.map((category,index)=>{
              return(
                  <button  type='button' className='filter-btn' key={index} onClick={()=>{filterItems(category)}}>{category}</button>
              )
            })}
        </div>
        <Menu items={filteredItems}/>
    </>
    
  )
};

export default Categories;

import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName] = useState('')
  const [list,setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show:false, msg:'', type:''})

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name){
      setAlert({show:true,msg:'Please enter input', type:'danger'})
    }else if(name && isEditing){
      // deal with edit
    }else{
      // show alert
      const newItem = {id: new Date().getTime().toString(),title:name}
      setList([...list,newItem]);
      setName('')
    }
  }

  return(
  <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert}/>}
      <h3>Grocery Bud</h3>
      <div className="form-control">
        <input type="text" className='grocery' placeholder='e.g. apples'
          value={name} onChange={(e)=>setName(e.target.value)}
        />
        <button className="submit-btn" type='submit'>
          {isEditing?'edit':'submit'}
        </button>
      </div>
    </form>
    {list.length >0 && (
      <div className="grocery-container">
      <List items={list}/>
      <button className='clear-btn'>clear items</button>
    </div>
    )}
    
  </section>
  )
}

export default App

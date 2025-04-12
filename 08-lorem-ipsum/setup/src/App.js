import React, { use, useState } from 'react';
import data from './data';
function App() {
  const [paranum,setParanum] = useState(0)
  const [paragraphs,setParagraphs] = useState([])

  function ShowParagraph(){
    let input = document.querySelector('input')
    setParagraphs([])
    if(isNaN(input.value) || input.value<1  || input.value>9){
      alert('Please enter value between 1 and 9')
    }else{
      setParanum(parseInt(input.value))
      let newParagraphs = []
      for(let i=0;i<=paranum;i++){
        newParagraphs.push(<p key={i}>{data[i]}</p>)
      }
      setParagraphs(newParagraphs)
    }
   
    
  }
  return (
  <>
    <div>
      <h1>Tired of boring lorem ipsum?</h1>
      <h2>paragraphs:</h2>
      <input type="number" min={1} max={9}/>
      <button onClick={ShowParagraph}>Generate</button>
      {paragraphs}
         
    </div>
  </>
    )
}

export default App;

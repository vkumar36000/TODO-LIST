import React from 'react'
import { useState } from 'react';


function AddTODO({ updateList }) {

    const [inputText, setinputText] = useState('')

  return (
    <div>
        <input 
          type="text"
          value={inputText}
          placeholder='   Add your next TODOs....'
          onChange={event=> setinputText(event.target.value)} 
        />
        <button 
          onClick={()=>{ 
          updateList(inputText);
          setinputText(''); 
          }}>AddTODO</button>
    </div>
  );
}

export default AddTODO;
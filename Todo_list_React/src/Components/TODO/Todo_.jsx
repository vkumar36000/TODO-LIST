import React from 'react'
import { useState } from 'react';




function Todo({ todoItem, isfinshed, changefinished, onDelete, onEdit }) {

  const [finished, setfinished] = useState(isfinshed);
  const [isEditing, setisEditing] = useState(false);
  const [setEditText, setsetEditText] = useState(todoItem);
  // console.log(finished);
 
  return (
    <div>
        <input type="checkbox" checked={finished} onChange={(event) => {
          setfinished(event.target.checked);
          changefinished(event.target.checked);
        }} />
        {(isEditing) ?  <input type="text" value={setEditText} onInput={(event) => setsetEditText(event.target.value)}/> :  <span>{todoItem}</span> }
        <button onClick={()=> {
          setisEditing(!isEditing);                                               //convert it true so that the "save" and "Edit" togle properly
          onEdit(setEditText)
        }}>{(!isEditing) ? "Edit" : "Save" }</button>
        <button onClick={onDelete}>delete</button>
    </div>
  );
}

export default Todo;
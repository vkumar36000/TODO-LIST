import { useState } from 'react'
import './App.css'
import TodoList from './Components/TODO_list/TodoList_'
import AddTODO from './Components/AddTodos/AddTODO'
import TodoContext from './Components/Context/ToDoContext_'


function App() {
  const [List, setList] = useState([
    {id:1, todoData:"todo 01", finished:false },
    {id:2, todoData:"todo 02", finished:false},
   ]);


  return (
    <TodoContext.Provider value={{List, setList}}>

      <AddTODO 
      updateList={(todo) => setList([...List, {id:List.length + 1, todoData:todo, finished:false }  ])}
      />
      <TodoList  />
      
      </TodoContext.Provider>
    
  )
}

export default App

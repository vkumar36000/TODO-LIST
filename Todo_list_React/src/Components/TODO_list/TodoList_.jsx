import React from "react";
import Todo from "../TODO/Todo_";
import ToDoContext from "../Context/ToDoContext_";
import { useContext } from "react";




function TodoList() {

  const {List, setList} = useContext(ToDoContext);
  return (
    <div>
      {List.length > 0 && List.map(todo => 
        <Todo
            key={todo.id}
            id={todo.id}
            isfinshed={todo.finished}
            todoItem={todo.todoData}
            
            changefinished={(isfinshed)=>{
              // console.log(isfinshed);                   //defalut value fales assign in app.jsx
              const updatedList = List.map(t => {         
                // console.log(to);                        // list items in the todo 
                if (t.id == todo.id) {
                  todo.finished = isfinshed;
                }
                console.log(todo, t)
                return t;
              });
              console.log(updatedList)
              setList(updatedList);
              console.log(List);    // updating existing list with new list

            }}
            onDelete={()=>{
              const updatedList = List.filter(t => t.id !== todo.id);
              setList(updatedList);
            }}

            onEdit={(todoText)=> {
              const updatedList = List.map(t =>{
                if (t.id == todo.id) {
                  todo.todoData = todoText;
                }
                return t;
              });
              setList(updatedList);
            }}
       />
        )}
    </div>
  );
}

export default TodoList;

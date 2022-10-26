import React from "react";

import TodoListCard from "./TodoListCard";

export const TodoListContainer = ({todos, settodos}) => {
  // console.log(todos)
  return (
    <React.Fragment>
    <ul id="tasks">

      {
        todos.map((todo) =>{
         return <TodoListCard todo={todo} key={todo._id} todos={todos} settodos={settodos}/>
        })
      }
        
    </ul>
      </React.Fragment>
  );
};

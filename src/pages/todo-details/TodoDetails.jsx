import React from 'react'
import { useParams } from 'react-router-dom'
import TodoistHeader from "../../components/TodoistHeader"
import "./todo-details.module.css"

export const TodoDetails = ({todos}) => {
  const {todo_id} = useParams();
  const todo = todos.find((todo) => todo._id === todo_id ) 
  return   (
    <div>
      <TodoistHeader hideForm/>
      <h2>{todo.title}</h2>
      <h3>{todo._id}</h3>
      <p>{todo.isCompleted ? "Done" : "pending"}</p>
    </div>
  )
}


//ways of solving css clash in react
//1. use normal css (with a different name)
//2. use module css (where you change the 
// name of the component to "a name".module.css
// and import the styles using any name)
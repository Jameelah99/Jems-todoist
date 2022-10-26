import React from 'react'
import { SpanButton } from './SpanButton'
import TodoInput from './TodoInput'
import H2 from './H2'
import HeaderLinks from './HeaderLinks'
import { useState } from 'react'

const TodoistHeader = ({hideForm, todos, settodos }) => {

  const [todoText, setTodoText] = useState("");
  
  const addTodo = () =>{
    const newTodo = {
      _id: crypto.randomUUID(),
      title: todoText, 
      isCompleted: false
    };
    console.log(newTodo)
    
    settodos([...todos, newTodo])
    
  };



  return (
    
    <section >
      <H2 classname={"title"} text={"TODOIST"}/>
      {
        hideForm ? null : 
        <React.Fragment>
        <TodoInput todotext={todoText} settodotext={setTodoText}/>
        <SpanButton label="Add" classname={"add-btn"} func={addTodo}/>
        <SpanButton label="Update" classname={"edit-btn"} />
        <HeaderLinks/>
        </React.Fragment>
      }
      
   </section>
  )
}

export default TodoistHeader
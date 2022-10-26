import React from 'react'

  const TodoInput = ({todotext, settodotext}) => {
  return (
    <input 
    type="text" 
    value={todotext} 
    onChange={(e)=>settodotext(e.target.value)} 
    id="todo-input" 
    placeholder="Add Tasks" />
  )
}

export default TodoInput;
import React from 'react'
import TodoActionButton from './TodoActionButton'
import { Link } from 'react-router-dom'

const TodoListCard = (props) => {
  const {todo, todos, settodos} = props; 
  const {_id, title, isCompleted} = todo;


  //Delete Todo
  function deleteTodo(){
    const updatedTodos = todos.filter((todo) => todo._id !== _id);
    settodos(updatedTodos);
  }

  //Toggle Complete
  function toggleComplete(){
    const updatedTodos = todos.map((todo) => { 
        if (todo._id === _id) {
          todo.isCompleted = !todo.isCompleted;
          return todo;
        } else {
          return todo;
        }
    });
      settodos(updatedTodos);
  }


  // Edit Function
 const editMode = () =>{
    const editBtn = todos.find((todo) =>{
      if(todo._id === _id){
    
      }
    });
 }


//   const editMode = (_id) =>{
//     const todo = todoDBInstance.find((todo) => todo._id === _id); 
//     document.getElementById("todo-input").value = todo.title;
//     addBtn.style.display = "none";
//     editBtn.style.display = "inline";
//     editBtn.setAttribute("id", _id);
// };

// function updatedTodoTitle () {
//     const { id } = this;
//     const _id = parseInt(id); //alias
//     const todoToUpdate = todoDBInstance.find((todo) => todo._id === _id);
//     todoToUpdate.title = document.getElementById("todo-input").value;

//     updatedTodoDB = todoDBInstance.map((todo) => 
//         todo._id === _id ? todoToUpdate : todo
//     );

//     localStorage.setItem(todoDBName, JSON.stringify(updatedTodoDB));
    
//     pageReload();
// };

  return (
        <li className={isCompleted ? "checked" : undefined}>
            {title}
            <Link to={`/${_id}`} className='view-more-icon'>👁</Link>
            <TodoActionButton func={toggleComplete} classname={"complete-status-icon"} icon="✅"/>
            <TodoActionButton classname={"edit-icon"} icon="✍"/>
            <TodoActionButton func={deleteTodo} classname={"close"} icon="🗑"/>
        </li>
  )
}

export default TodoListCard
import React from 'react'
// import { Link } from 'react-router-dom'

const TodoActionButton = ({classname, icon, func}) => {
  return (
    // <Link to="details">
    
    <span onClick={() => func()} className={classname}>{icon}</span>
    // </Link>
  )
}

export default TodoActionButton
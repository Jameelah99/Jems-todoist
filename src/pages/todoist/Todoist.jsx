import React from 'react'
import './todoist.css';   //double quote can be used too
import { TodoListContainer } from '../../components/TodoListContainer';
import TodoistHeader from '../../components/TodoistHeader';


const Todoist = ({todos, settodos}) => {
  
  return (
    <section className="container">
            <TodoistHeader todos = {todos} settodos={settodos} />
            <TodoListContainer todos = {todos} settodos={settodos}/>
    </section>

  );
};

export default Todoist;

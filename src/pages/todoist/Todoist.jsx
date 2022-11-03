import React from 'react'
import '../todoist/todoist.css';   //double quote can be used too
import { TodoListContainer } from '../../components/todoist-layout/TodoListContainer';
import TodoistHeader from '../../components/layouts/TodoistHeader';


const Todoist = ({todos, settodos}) => {
  
  return (
    <section className="container">
            <TodoistHeader todos = {todos} settodos={settodos} />
            <TodoListContainer todos = {todos} settodos={settodos}/>
    </section>

  );
};

export default Todoist;

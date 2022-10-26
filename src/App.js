import React, {useState} from 'react'; 
import './App.css';
import { TodoDetails } from './pages/todo-details/TodoDetails';
import Todoist from './pages/todoist/Todoist';
import {Routes, Route} from "react-router-dom"
import { ContactUs } from './components/ContactUs';


function App() {
const [todos, setTodos] = useState([]);
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Todoist todos ={todos} settodos={setTodos}/>} />
      <Route path=':todo_id' element={<TodoDetails todos={todos}/>} />
      <Route path='contact' element={<ContactUs/>} /> 
    </Routes>
    </>
  );
}

export default App;

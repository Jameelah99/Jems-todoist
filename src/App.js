import React, {useState} from 'react'; 
import './App.css';
import { TodoDetails } from './pages/todo-details/TodoDetails';
import Todoist from './pages/todoist/Todoist';
import {Routes, Route} from "react-router-dom"
import { ContactUs } from './pages/contactUs/ContactUs';
import { PlayGroundForm } from './components/typography/PlayGroundForm';
import { Login } from './components/typography/Login';


function App() {
const [todos, setTodos] = useState([]);
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Todoist todos ={todos} settodos={setTodos}/>} />
      <Route path=':todo_id' element={<TodoDetails todos={todos}/>} />
      <Route path='contact' element={<ContactUs/>} /> 
      <Route path='playground' element={<PlayGroundForm/>} /> 
      <Route path='login' element={<Login/>} /> 
    </Routes>
    </>
  );
}

export default App;

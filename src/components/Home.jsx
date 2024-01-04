import React , {useEffect,useState}from 'react'
import './Home.css'
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faListCheck} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {Link} from 'react-router-dom'
import Task from './Task'
import { ToastContainer, toast } from 'react-toastify';


const Home = () => {
  
  
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    
    const typed = new Typed(".typing-text",{
      strings: ["Start your day with a plan!", "Get ready to make things happen!","Start small, make big!"],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });
    return () =>{typed.destroy();}
  }, []);
  useEffect(()=>{
    const storedTasks = localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    setTasks((storedTasks));},
  [])
  const deleteTask=(index)=>{
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    toast.success("Task has been deleted!");
  };

  const editTask = (index, editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
    <p className='head'><FontAwesomeIcon icon={faListCheck} color="rgb(182, 28, 166)" /> Task List</p>
    <p className="typing-text"></p>
    {tasks.length === 0 ? (
    <div className='notask'>
      <p>You don't have any tasks yet</p>
      <p>Click on the + button to add one</p>
    </div>
  ) : (
    tasks.map((item, index) => (
      <Task key={index} title={item.title} description={item.description} index={index} deleteTask={deleteTask} editTask={editTask} />
    ))
  )}
    <Link to="/add">
      <button className='btn1' title="Add New Task">+</button>
    </Link>
  <ToastContainer/>
  </div>
  )
}

export default Home
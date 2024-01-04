import React , {useState,useEffect} from 'react'
import './AddTask.css'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faListUl} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddTask = () => {
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    setTasks(storedTasks);
  }, []);

  const navigate = useNavigate();
  const [tasks,setTasks] = useState([]);


  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

  const submitHandler = (e) =>{
    e.preventDefault();
    if (title.trim() !== "") {
      const newTask = { title, description };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      navigate('/');
    }
    else{
      toast.error('Title is required!')
    }
  };

  return (
    <div className="task-container">
        <h2><FontAwesomeIcon icon={faListUl} /> Add New task</h2>
        <form 
        onSubmit={submitHandler}
        className='form'>
            <input type="text" placeholder="Title" 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}

            />
            <textarea placeholder='Description'
             value={description}
             onChange={(e)=>setDescription(e.target.value)}
             ></textarea>
             <button type="submit">Create Task</button>
             <ToastContainer />
        </form>
    </div>
  )
}

export default AddTask
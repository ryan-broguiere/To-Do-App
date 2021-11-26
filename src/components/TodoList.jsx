import React, { useState, useEffect} from 'react';
import axios from 'axios';


function TodoList() {
  
    const [newTask, setNewTask] = useState([]);

    useEffect( () => {
      LoadTasks();
      //console.log(newTask);
    })

    const LoadTasks = () => {
      axios.get("http://localhost:4000/tasks")      
      .then(response => setNewTask(response.data));
    }

    const completeTask = async id =>{
        const result = axios.put("http://localhost:4000/tasks/addedtasks/"+ id)        
    }
    return (
      <section>
      {newTask.map((task) =>   
      <div className={"mx-auto h-full p-4 mt-4 w-4/5 bg-gray-800 shadow-lg border-gray-700 border-2 flex justify-center items-center slide-in-bottom md:w-2/5" + (task.status ? " border-blue-400 border-2":"")} key={task._id}>       
          <button className="items-left absolute left-3 transition duration-400 transform hover:scale-110">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24"
          className={"text-gray-600 w-6 h-6 flex-shrink-0 mr-4 hover:text-blue-400" + (task.status ? " text-blue-400 ":"")} onClick={ () => completeTask(task._id)} >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          </button>
          <span className={"title-font font-semibold text-gray-100" + (task.status ? " text-blue-400 line-through":"")}>{task.taskName} </span>
          <button className="float-right absolute right-4 transition duration-400 transform hover:scale-110">
          <img width="25" height="25" src="https://img.icons8.com/flat-round/64/000000/delete-sign.png" alt='delete'/>         
          </button>    
      </div>)}  
      </section>
    )    
}

export default TodoList

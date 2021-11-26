import React, { useState, useEffect} from 'react';
import axios from 'axios';


function TodoList() {
  
    const [newTask, setNewTask] = useState([]);

    useEffect( () => {
      LoadTasks();
      console.log(newTask);
    })

    const LoadTasks = () => {
      axios.get("http://localhost:4000/tasks")      
      .then(response => setNewTask(response.data));
    }
    return (
      <section>
      {newTask.map((task) =>   
      <div className="mx-auto mt-4 w-4/5 bg-gray-800 flex items-center slide-in-bottom md:w-2/5">             
        <div className="bg-gray-800 rounded flex p-4 h-full items-center ">
          <button className="transition duration-400 transform hover:scale-110">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-gray-600 w-6 h-6 flex-shrink-0 mr-4 hover:to-blue-300" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          </button>
          <span className="title-font font-medium text-white">{task.taskName} </span>
          <img className="float-right absolute right-4" width="25" height="25" src="https://img.icons8.com/flat-round/64/000000/delete-sign.png" alt='delete'/>
        </div>      
      </div>)}  
      </section>
    )    
}

export default TodoList

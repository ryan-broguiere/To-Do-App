import React from 'react';



function TodoList({tasks}) { 
   

    const completeTask = (task) => {task.status=true}
    const deleteTask = () => {console.log('deleted')}
    
    return (
      <section>{/* access the object 'task' inside the task variable*/}
      {tasks.map((task) =>   
      <div key={task.task.id} className={"mx-auto h-full p-4 mt-4 w-4/5 dark:bg-gray-800 shadow-lg dark:border-gray-700 border-2 flex justify-center items-center slide-in-bottom md:w-2/5" + (task.task.status ? " border-blue-400 dark:border-blue-400 border-2":"")} >       
          <button className="items-left absolute left-3 transition duration-400 transform hover:scale-110">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24"
          className={"text-gray-600 w-6 h-6 flex-shrink-0 mr-4 hover:text-blue-400" + (task.task.status ? " text-blue-400 ":"")} onClick={ () => completeTask(task.task.id)} >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>{console.log(tasks)}
          </button><p className={"absolute left-12 inline float-left text-left dark:text-gray-200 " + (task.task.status ? " text-blue-400 dark:text-blue-400 line-through ":"")}>{task.task.date}</p>
          <span className={"title-font font-semibold dark:text-gray-100" + (task.task.status ? " text-blue-400 dark:text-blue-400 line-through":"")}>{task.task.taskName}</span>
          <button className="float-right absolute right-4 transition duration-400 transform hover:scale-110" onClick={ () => deleteTask(task.task.id)}>
          <img width="25" height="25" src="https://img.icons8.com/flat-round/64/000000/delete-sign.png" alt='delete'/>         
          </button>    
      </div>)}  
      </section>
    )    
}

export default TodoList

import React from 'react';

const TodoForm = ({inputText, setInputText, tasks, setTasks}) => {  

  const task = {
    taskName: inputText,
    id: Math.random(),
    status: false,
    date: new Date().toString().slice(0, 25)
  }

  const inputHandler = (event) => {
    event.preventDefault()
    if (!task.taskName)
    {alert ('The task should have a name.')}
    else{    
    setTasks([...tasks, {task}])
    setInputText('')
    }   
}


    return (      
    <form onSubmit={inputHandler} className="flex items-center align-middle  md:max-w-6xl sm:flex-row flex-col mx-auto px-8 sm:px-0 sm:items-end sm:space-x-4 sm:space-y-0 space-y-4 mb-6 mt-2">
      <div className="relative sm:mb-0 flex-grow w-full">
        <label htmlFor="task" className="leading-7 text-sm dark:text-blue-100 text-blue-300">Enter Task</label>
        <input value={inputText} onChange={(event) => setInputText(event.target.value)} type="text" id="task" className="w-full bg-gray-200 dark:bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>      
      <button className="text-white rounded-md bg-blue-500 border-1 w-1/2 justify-center md:w-1/5 p-2 hover:bg-blue-700 text-lg transform duration-200 hover:scale-105 items-center hover:shadow-xl">Add Task</button>      
    </form>
    )
}

export default TodoForm

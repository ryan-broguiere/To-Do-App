import React, {useState} from 'react';
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import Footer from './components/Footer';
import TodoForm from './components/TodoForm'

function App() {
  const [inputText, setInputText] = useState('')
  const [tasks, setTasks] = useState([])      
  

  return (
    <div>
      <Navbar/>
      <TodoForm tasks={tasks} setTasks={setTasks} inputText={inputText} setInputText={setInputText}/> {/*passing props into the component*/}
      <TodoList tasks={tasks} setTasks={setTasks}/>
      <Footer/>      
    </div>
   
    
  )
}

export default App;

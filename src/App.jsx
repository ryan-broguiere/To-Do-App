import React from 'react';
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'
import Footer from './components/Footer';
import TodoForm from './components/TodoForm'

function App() {
  return (
    <div>
      <Navbar/>
      <TodoForm/>
      <TodoList/>
      <Footer/>
      
      
    </div>
   
    
  )
}

export default App;

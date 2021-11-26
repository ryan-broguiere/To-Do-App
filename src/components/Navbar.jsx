import React from 'react'

function Navbar() {
    return (       

<header className="text-gray-300 bg-blue-400 dark:text-white dark:bg-black dark:border-transparent body-font border-b shadow-lg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 ">
    <img className="border-rounded dark:border-blue-400 dark:bg-blue-400 border-2 rounded-full transition duration-200 transform hover:scale-105" src="https://img.icons8.com/cute-clipart/64/000000/check.png" height="64" width="64" alt=""/>
    </a>
    <span className="ml-3 text-xl flex title-font font-medium items-center text-white mb-4 md:mb-0 ">ToDo App</span>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">      
    </nav>
  
    
    <button className="darkmodebutton" id="darkmodebutton">
      <img className="float-right transition duration-300 transform hover:scale-110" src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-dark-mobile-phones-soft-fill-soft-fill-juicy-fish.png" height="50" width="50" alt='dark mode'/>
    </button>
    
  </div>
</header>

    )
}

export default Navbar
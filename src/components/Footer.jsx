import React from 'react'


function Footer() {
    return (
<footer className="flex text-gray-100 bg-blue-400 dark:text-white dark:bg-black body-font fixed bottom-0 w-full ">
  <div className="container px-5 md:py-8 py-4 mx-auto flex items-center sm:flex-row ">    
    <img className="border-rounded dark:border-blue-400 dark:bg-blue-400 border-2 rounded-full transition duration-200 transform hover:scale-110" src="https://img.icons8.com/cute-clipart/64/000000/check.png" height="48" width="48" alt=''/>
      <span className="ml-3 text-xl hidden lg:inline">ToDo App</span>    
    <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 border-gray-300 dark:border-gray-700 sm:py-2 hidden lg:flex">© GNU General Public License v3.0</p>
    <p><a href="https://www.gnu.org/licenses/gpl-3.0.en.html" className="text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 border-gray-300 dark:border-gray-700 sm:py-2 sm:mt-0 mt-4 ml-1 hover:text-black dark:hover:text-blue-300 transition duration-500" target="_blank" rel="noopener noreferrer">Copyright Policy</a>      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start fixed right-5 bottom-3 md:static">           
     <a href="https://github.com/ryan-broguiere/To-Do-App" target="_blank" rel="noopener noreferrer"> 
    <img className="transition duration-300 transform hover:scale-110" src="https://img.icons8.com/bubbles/50/000000/github.png" height="50" width="50" alt="github"/>
     </a>
    </span>
  </div>
</footer>
    )
}

export default Footer

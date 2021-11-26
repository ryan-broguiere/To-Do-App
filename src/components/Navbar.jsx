import React from 'react'

function Navbar() {
    return (       

<header class="text-gray-300 bg-blue-400 dark:text-white dark:bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">ToDo App</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      
    </nav>
   Dark Mode
    <div class="form-control">
    <label class="cursor-pointer label">      
      <input type="checkbox" class="toggle toggle-primary"/>
    </label>
  </div>
    
  </div>
</header>

    )
}

export default Navbar
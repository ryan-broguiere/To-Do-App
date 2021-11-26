import React from 'react'

function Footer() {
    return (
<footer className="flex text-gray-400 bg-blue-400 dark:bg-gray-900 body-font absolute bottom-0 w-full ">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
    <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">ToDo App</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2021 Tailblocks —
      <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
           
      
    <img width="45" height="45" src="https://img.icons8.com/stickers/100/000000/github.png" alt=""/>
     
    </span>
  </div>
</footer>
    )
}

export default Footer

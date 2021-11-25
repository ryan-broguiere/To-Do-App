import React from 'react'

function Navbar() {
    return (       

        <nav class="bg-white rounded-md shadow-xl dark:bg-gray-800">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <div class="text-2xl font-bold text-gray-700 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                    <a href="#"><img class="inline p-1 mb-2" src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-task-work-from-home-flatarticons-blue-flatarticons.png" width="50" height="50" alt=""/></a>
                    T͛o͛D͛o͛
                </div>                
               
            </div>

            
            <div class="items-center md:flex">
                

                <div class="flex justify-center md:block">
                    <a class="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    <img height="40" width="40" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-settings-interface-kiranshastry-gradient-kiranshastry.png"/>

                        
                    </a>
                </div>
            </div>
        </div>
    </nav>

    )
}

export default Navbar


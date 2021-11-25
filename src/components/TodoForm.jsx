import React, { useState } from 'react';

function TodoForm() {
const [input, setInput] = useState('')
    return (
        
<div class="mt-20 flex flex-col items-center shad">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="text-xs font-medium text-center text-gray-500">
               
              </th>

              <th scope="col" class="px-6 py-3 text-xs font-medium text-center text-gray-500 uppercase tracking-wider">
               date
              </th>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task name
              </th>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>             
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
            <td class="whitespace-nowrap">
                <div class="flex items-center">                  
                  <div>
                  <label class="flex items-center space-x-3 mb-3">
                <input type="checkbox" name="checked-demo" class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"/>
                    <span class="text-gray-700 dark:text-white font-normal">
                        Green
                    </span>
                </label>
                    
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">                  
                  <div>
                    <div class="text-sm text-gray-900">
                      11/25/2021 - 11:57 AM
                    </div>
                    
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">Learn HTML, CSS, JavaScript</div>
                
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-red-500 hover:text-red-700">Delete</a>
              </td>
            </tr>

            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    )
}

export default TodoForm

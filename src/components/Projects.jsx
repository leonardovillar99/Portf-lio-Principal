import React from 'react'

const Projects = () => {
  return (
  <div className='bg_home' id='projects'>
    <div className='container h-screen'>
        <div className='text-center pt-24 mt-32'>
          <span className='text-lg font-normal'>
              confira meus
          </span>
          <h1 className='text-5xl font-bold'>
              Projetos
          </h1>
        </div>

        <div className='flex justify-center items-center h-10 mt-10 rounded-full bg-gray-100 shadow-lg'>
          <ul className='flex gap-10'>
            <li className='cursor-pointer font-medium text-lg'>
              Portfólio
            </li>
            <li className='cursor-pointer font-medium text-lg'>
              E-Commerce
            </li>
            <li className='cursor-pointer font-medium text-lg'>
              Landing Page
            </li>
            <li className='cursor-pointer font-medium text-lg'>
              Game
            </li>
          </ul>
        </div>
    </div>
  </div>
  )
}

export default Projects
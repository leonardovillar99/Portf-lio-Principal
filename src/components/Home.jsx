import React from 'react'
import Socials from './Socials'
import TypewriterComponent from 'typewriter-effect'
import js from '../assets/js.png'
import react from '../assets/react.jpg'
import tailwind from '../assets/tailwind.png'
import CV from './CV'

const Home = () => {
  return (
  <div className='bg_home h-screen'>
    <div className='container h-full relative flex justify-center'>
        <div className='absolute z-10 bottom-1/2 left-0 w-40'>
          <div className='floating relative bg-gray-100 rounded-full p-4 shadow-xl'>
            <img 
              src={tailwind} 
              alt="circle" 
            />
          </div>
        </div>

        <div className='absolute z-10 bottom-[45%] left-48 w-24'>
          <div className='floating2 relative bg-gray-100 rounded-full p-4 shadow-xl'>
            <img 
              src={js} 
              alt="circle" 
            />
          </div>
        </div>

        <div className='absolute z-10 top-[20%] right-0 w-64'>
          <div className='floating3 relative bg-gray-100 rounded-full p-4 shadow-xl'>
            <img 
              src={react}
              alt="circle" 
            />
          </div>
        </div>

        <div className='flex items-center flex-col absolute top-1/2 z-20'>          
            <h1 className='bg-gray-100 p-4 shadow-xl text-xl font-normal' id='text'>
            <TypewriterComponent 
              onInit={(typewriter) => {
                const name = 'Leonardo Villar';
                const age = '23'
                const job = 'Desenvolvedor Web'
                typewriter.typeString(`Olá, meu nome é ${name}, tenho ${age} anos e sou ${job.bold()}.`).start()
              }}
            />
            </h1>
            <CV />
        </div>
        
        <Socials />
    </div>
  </div>
  )
}

export default Home
import React from 'react'

const Header = () => {
  return (
    <div className='blur_navbar h-20 w-full flex z-40 fixed top-0'>
        <div className='container flex items-center justify-between'>
            <h1 className='font-semibold text-3xl cursor-pointer'>
                Villar
            </h1>

            <ul className='flex gap-12 text-lg font-medium'>
                <li>
                    <a className='text-gray-900 hover:text-gray-300 duration-100'
                    href="/#">
                        Início
                    </a>
                </li>
                <li>
                    <a className='text-gray-900 hover:text-gray-300 duration-100' 
                    href="#about">
                        Sobre
                    </a>
                </li>
                <li>
                    <a className='text-gray-900 hover:text-gray-300 duration-100' 
                    href="#projects">
                        Projetos
                    </a>
                </li>
                <li>
                    <a className='text-gray-900 hover:text-gray-300 duration-100' 
                    href="#contact">
                        Contato
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header
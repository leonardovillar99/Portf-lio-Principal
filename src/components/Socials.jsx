import React from 'react'
import { FaLinkedinIn} from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'

const Socials = () => {

  return (
    <div className='absolute left-0 bottom-6 flex flex-col gap-4 text-2xl'>
        <a className='bg-white p-2 rounded-full shadow-xl hover:scale-125 transition-all'
        href='https://www.linkedin.com/in/leonardo-villar-896901193/' 
        target="blank">
        <FaLinkedinIn />
        </a>

        <a className='bg-white p-2 rounded-full shadow-xl hover:scale-125 transition-all'
        href='https://github.com/leonardovillar99' 
        target="blank">
        <FiGithub />
        </a>

        <a className='bg-white p-2 rounded-full shadow-xl hover:scale-125 transition-all'
        href='https://twitter.com/_LeonardoVillar' 
        target="blank">
        <FaTwitter />
        </a>
    </div>
  )
}

export default Socials
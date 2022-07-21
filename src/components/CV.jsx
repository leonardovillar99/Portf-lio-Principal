import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import Curriculo from '../assets/Curriculo.pdf'

const CV = () => {
  return (
    <div className='flex mt-14'>
        <a className='flex items-center gap-2 bg-gray-900 p-4 font-semibold text-white rounded-full hover:bg-gray-800 transition-colors '
        href={Curriculo} download="Currículo">
            Baixar Currículo
            <AiOutlineCloudDownload size={22} />
        </a>
    </div>
  )
}

export default CV
import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { AiOutlineDatabase } from 'react-icons/ai'
import { MdDesignServices } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import perfil from '../assets/perfil.png'

const About = () => {

  return (
    <div className='container pt-24' id='about'>
      <div className='text-center'>
        <span className='text-lg font-normal'>
          um pouco
        </span>
        <h1 className='text-5xl font-bold'>
          Sobre Mim & Skills
        </h1>
      </div>

      <div className='flex items-center mt-12 gap-7'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        <div className='w-44'>
          <img className='rounded-2xl shadow-xl' 
          src={perfil} 
          alt="" />
        </div>

        <div className='flex flex-col gap-1'>
          <span className='text-gray-900 text-lg font-bold'>
            Leonardo Villar &#8226; 23 anos &#8226; São Paulo - Capital
          </span>
          <p className='text-lg font-medium text-justify leading-tight pb-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque ducimus laboriosam tempore quisquam optio, possimus obcaecati iste corrupti, vitae hic pariatur temporibus laborum praesentium.
          </p>
          <a className='w-44 p-3 gap-3 rounded-full bg-gray-900 flex justify-center items-center text-white font-semibold shadow-sm'
          href="/#">
            <BsFillTelephoneFill />
            Contato
          </a>
        </div>

      </div>

      <div className='flex items-start justify-between gap-10 mt-20'>
        <div className='w-full bg-gray-100 shadow-lg'>
          <h1 className='text-2xl font-semibold text-center pt-6'>
            Educação
          </h1>
          <div className='flex flex-col gap-4 p-4 mt-3 pb-8'>
            <span className='text-lg'>
              &#8226; Curso Técnico <b>(Completo)</b> - Técnico em Informática (SENAC)
            </span>
            <span className='text-lg'>
              &#8226; Ensino Superior <b>(Cursando)</b> - Ciência da Computação (UNIP)
            </span>
            <span className='text-lg'>
              &#8226; Ensino Médio <b>(Completo)</b>
            </span>
          </div>

          <hr />

          <h1 className='text-2xl font-semibold text-center pt-6'>
            Experiência
          </h1>
          <div className='flex flex-col gap-4 p-4 mt-3 pb-8'>
            <span className='text-lg'>
              &#8226; Curso Técnico <b>(Completo)</b> - Técnico em Informática (SENAC)
            </span>
            <span className='text-lg'>
              &#8226; Ensino Superior <b>(Cursando)</b> - Ciência da Computação (UNIP)
            </span>
            <span className='text-lg'>
              &#8226; Ensino Médio <b>(Completo)</b>
            </span>
          </div>

          <hr />

          <h1 className='text-2xl font-semibold text-center pt-6'>
            Certificados
          </h1>
          <div className='flex flex-col gap-4 p-4 mt-3 pb-8'>
            <span className='text-lg'>
              &#8226; Curso Técnico <b>(Completo)</b> - Técnico em Informática (SENAC)
            </span>
            <span className='text-lg'>
              &#8226; Ensino Superior <b>(Cursando)</b> - Ciência da Computação (UNIP)
            </span>
            <span className='text-lg'>
              &#8226; Ensino Médio <b>(Completo)</b>
            </span>
          </div>
        </div>

        <div className='flex flex-col gap-10'>
          <article className='w-[700px] h-[450px] rounded-lg bg-gray-900 flex flex-col items-center p-6 shadow-lg'>
            <div className='flex items-center gap-4'>
              <h1 className='font-bold text-2xl text-white'>
                Front-end
              </h1>
              <MdDesignServices className='text-white text-xl' />
            </div>

            <div className='h-full gap-14 grid grid-cols-2 items-center place-content-center'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <BsFillPatchCheckFill className='text-white' />
                  <span className='text-white font-semibold text-lg'>
                    HTML5
                  </span>
                </div>

                <div>
                  <span className='text-white'>Avançado</span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <BsFillPatchCheckFill className='text-white' />
                  <span className='text-white font-semibold text-lg'>
                    CSS
                  </span>
                </div>

                <div>
                  <span className='text-white'>Intermediário</span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <BsFillPatchCheckFill className='text-white' />
                  <span className='text-white font-semibold text-lg'>
                    Javascript
                  </span>
                </div>

                <div>
                  <span className='text-white'>Intermediário</span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <BsFillPatchCheckFill className='text-white' />
                  <span className='text-white font-semibold text-lg'>
                    Tailwind
                  </span>
                </div>

                <div>
                  <span className='text-white'>Intermediário</span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <BsFillPatchCheckFill className='text-white' />
                  <span className='text-white font-semibold text-lg'>
                    ReactJS
                  </span>
                </div>

                <div>
                  <span className='text-white'>Intermediário</span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <BsFillPatchCheckFill className='text-white' />
                  <span className='text-white font-semibold text-lg'>
                    Bulma
                  </span>
                </div>

                <div>
                  <span className='text-white'>Básico</span>
                </div>
              </div>
            </div>

          </article>

          <article className='w-[700px] h-[450px] rounded-lg bg-gray-900 flex flex-col items-center p-6 shadow-lg'>
            <div className='flex items-center gap-4'>
              <h1 className='font-bold text-2xl text-white'>
                Back-end
              </h1>
              <AiOutlineDatabase className='text-white text-xl' />
            </div>

            <div className='h-full gap-14 grid grid-cols-2 items-center place-content-center'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <BsFillPatchCheckFill className='text-white' />
                  <span className='text-white font-semibold text-lg'>
                    Java
                  </span>
                </div>

                <div>
                  <span className='text-white'>Intermediário</span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <BsFillPatchCheckFill className='text-white' />
                  <span className='text-white font-semibold text-lg'>
                    NodeJS
                  </span>
                </div>

                <div>
                  <span className='text-white'>Básico</span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <BsFillPatchCheckFill className='text-white' />
                  <span className='text-white font-semibold text-lg'>
                    MySQL
                  </span>
                </div>

                <div>
                  <span className='text-white'>Intermediário</span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <BsFillPatchCheckFill className='text-white' />
                  <span className='text-white font-semibold text-lg'>
                    MongoDB
                  </span>
                </div>

                <div>
                  <span className='text-white'>Básico</span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <BsFillPatchCheckFill className='text-white' />
                  <span className='text-white font-semibold text-lg'>
                    Python
                  </span>
                </div>

                <div>
                  <span className='text-white'>Básico</span>
                </div>
              </div>
            </div>

          </article>
        </div>
        
      </div>

    </div>
  )
}

export default About
import React from 'react'

const About = () => {
  return (
    <div className='container pt-11 pb-10' id='about'>
      <div className='text-center'>
        <span className='text-lg font-normal'>
          um pouco
        </span>
        <h1 className='text-5xl font-bold'>
          Sobre Mim
        </h1>
      </div>

      <div className='flex justify-center items-center mt-12'>
        <div className='bg-gray-100 rounded-lg p-4 shadow-xl'>
          <p className='text-lg font-medium text-justify leading-relaxed'>
            Olá, meu nome é Leonardo Villar, tenho 23 anos e atualmente estou cursando o 4º semestre
            de Ciência da Computação pela UNIP. Tudo começou quando iniciei meus estudos pelo Senac
            em um curso técnico de TI em 2018, e foi onde comecei a me apaixonar pelo mundo da
            tecnologia. Tive a oportunidade de participar de dois projetos importantissímos para o 
            meu desenvolvimento naquela época, chamado projeto integrador. O primeiro fui responsável
            em prestar suporte em computadores que estivessem quebrados, isso tudo para o público
            aberto que foi convidado a participar, tudo isso gratuitamente. 
          </p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-10 mt-12'>
          <article className='w-full h-[450px] rounded-2xl bg-gray-900 flex flex-col items-center p-6 shadow-xl'>
            <h1 className='font-bold text-2xl text-white'>
              Front-end
            </h1>

            <div className='h-full gap-10 grid grid-cols-2 items-center place-content-center'>
              <span className='text-white font-base text-lg'>ReactJS</span>
              <span className='text-white font-base text-lg'>Javascript</span>
              <span className='text-white font-base text-lg'>HTML</span>
              <span className='text-white font-base text-lg'>CSS</span>
              <span className='text-white font-base text-lg'>Tailwind</span>
              <span className='text-white font-base text-lg'>Sass</span>
            </div>
          </article>

          <article className='w-full h-[450px] rounded-2xl bg-gray-900 flex justify-center p-6 shadow-xl'>
            <h1 className='font-bold text-2xl text-white'>
              Back-end
            </h1>
          </article>
        </div>
    </div>
  )
}

export default About
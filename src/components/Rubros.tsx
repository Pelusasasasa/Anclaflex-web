import React from 'react'
import { RubroCard } from './RubroCard'
import { rubros } from '@/data/rubros'

export const Rubros = () => {
  return (
    <section id='rubros' className='pt-10 bg-gray-200 font-helvetica pb-5'>
        <div className='container mx-auto'>

            <div className='flex flex-col items-center gap-2 '>
                <h2 className='text-5xl text-dark font-bold'>Nuestros Rubros</h2>
                <p className='text-xl text-dark text-center'>Ofrecemos pinturas, perfiles, cerámicas y mucho más para satisfacer todas tus necesidades en construcción y decoración.</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-7 gap-7'>
                { rubros.map(rubro => (
                    <RubroCard key={rubro.titulo} titulo={rubro.titulo} texto={rubro.texto} img={rubro.img} whatsApp mail/>
                ))}
            </div>
        </div>
    </section>
  )
}

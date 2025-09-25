
import React from 'react'
import { MarcaItem } from './MarcaItem'
import { useMarca } from '@/hooks'

export const Marcas = () => {

    const { marcas } = useMarca();

  return (
    <section id='marcas' className='bg-gray-200 py-20'>
        <div className='container mx-auto px-4 font-helvetica'>
            <div className='text-center mb-20'>
                <h2 className='text-4xl md:text-5xl mb-6 font-bold text-dark'>Marcas que trabajamos</h2>
                <p className='text-lg text-dark'>Colaboramos con las marcas más reconocidas del mercado para garantizar la mejor calidad</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-dark gap-5'>
                { marcas.map(marca => (
                    <MarcaItem key={marca.nombre} logo={marca.logo} nombre={marca.nombre} ambos={marca.ambos} />
                ))}
            </div>
        </div>
    </section>
  )
}

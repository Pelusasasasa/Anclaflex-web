import { Marca } from '@/interface/marca'
import Image from 'next/image'
import React from 'react'


export const MarcaItem = ({nombre, logo, ambos}: Marca) => {

  return (
    <figure aria-label={`Marca ${nombre}`} className='flex flex-col text-center justify-center p-3 h-24 items-center gap-3 bg-white rounded-lg hover:cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300'>
        {logo && ambos && <Image alt={`Logo de la marca ${nombre}`} src={logo} width={100} height={100} className='w-auto h-auto'/>}
        <p className='text-lg font-bold '>{nombre}</p>
    </figure>
  )
}

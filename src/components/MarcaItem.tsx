import { Marca } from '@/interface/marca'
import Image from 'next/image'
import React from 'react'


export const MarcaItem = ({texto, logo, ambos}: Marca) => {

    

  return (
    <figure aria-label={`Marca ${texto}`} className='text-center justify-center flex p-3 h-16 items-center gap-3 bg-white rounded-lg hover:cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300'>
        {logo && <Image alt={`Logo de la marca ${texto}`} src={logo} width={50} height={50}/>}
        {ambos && <p className='text-lg font-bold '>{texto}</p>}
    </figure>
  )
}

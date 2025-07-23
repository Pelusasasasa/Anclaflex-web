import { Contacto } from '@/interface/contacto'
import React from 'react'
import { BiPhone } from 'react-icons/bi'

export const ContactoItem = ({tipo, bgIcon, icon, textos}: Contacto) => {
  return (
    <div className='bg-white px-10 py-5 rounded-lg justify-center flex flex-col items-center text-dark'>

        <div className={`${bgIcon} inline-flex p-2 mb-2 rounded-full items-center justify-center`}>
            <BiPhone size={20} className='text-light'/>
        </div>

        <p className='text-center font-bold mb-3'>{tipo}</p>

        <div className='space-y-1'>
            { textos.map(texto => (
                <p key={texto}>{texto}</p>
            ))}
        </div>
    </div>
  )
}

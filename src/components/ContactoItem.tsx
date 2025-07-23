import { Contacto } from '@/interface/contacto'
import React from 'react'
import {  IconType } from 'react-icons';

export const ContactoItem = ({tipo, bgIcon, icon, textos}: Contacto) => {
  const Icon: IconType = icon;
  return (
    <div className='bg-white px-10 py-5 rounded-lg justify-center flex flex-col items-center text-dark'>

        <div className={`${bgIcon} inline-flex p-2 mb-2 rounded-full items-center justify-center`}>
            <Icon size={20} className='text-light'/>
        </div>

        <p className='text-center font-bold mb-3'>{tipo}</p>

        <div className='space-y-1'>
            { textos.map((texto, index) => (
                <p key={index} className='text-center'>{texto}</p>
            ))}
        </div>
    </div>
  )
}

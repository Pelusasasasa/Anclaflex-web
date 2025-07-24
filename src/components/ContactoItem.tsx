import { Contacto } from '@/interface/contacto'
import React from 'react'
import {  IconType } from 'react-icons';
import { BsWhatsapp } from 'react-icons/bs';

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
                <div key={index} className='text-center'>{
                  tipo === 'Telefono'
                  ? (
                    <div className='flex gap-2 items-center cursor-pointer'>
                      <BsWhatsapp color='green'/>
                      <p>{texto}</p>
                    </div>
                  ) : (<p>{texto}</p>)
                }</div>
            ))}
        </div>
    </div>
  )
}

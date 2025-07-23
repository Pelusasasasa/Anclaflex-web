import { contactos } from '@/data/contactos'
import React from 'react'
import { ContactoItem } from './ContactoItem'

export const Contacto = () => {
  return (
    <section id='contacto' className='bg-dark py-20' aria-labelledby='contacto-title'>
        <div className='container mx-auto'>
            <div className='text-light'>
                <h2 className='text-4xl md:text-5xl pb-6 text-center'>Contactanos</h2>
                <p className='text-lg text-center'>Estamos aqui para ayudarte con tu proyecto. No dudes en contactarnos</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-20'>
                    { contactos.map(contacto => (
                        <ContactoItem {...contacto} key={contacto.tipo}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

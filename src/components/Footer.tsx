import { mail, telefono, urlMail, urlWSAPGeneral } from '@/data/variables';
import Image from 'next/image'
import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';

const links = ['Inicio', 'Rubros', 'Nosotros', 'Marcas', 'Contacto'];

export const Footer = () => {
  return (
    <footer className='bg-dark py-10 border-t border-b-light'>
            <div className='container mx-auto text-light font-helvetica'>
            <div className='border-b-light border-b grid grid-cols-1 text-center md:text-left md:grid-cols-3 pb-10'>
                <div className='mx-5'>
                    <Image src="/images/Logo.png" alt='Imagen logo del pie de pagina' width={600} height={500} className='w-40' />
                    <p className='font-normal'>Tu socio confiable en pinturas y Construcción</p>
                </div>

                <div className='mx-auto my-5'>
                    <p className='text-lg font-bold mb-6'>Enlaces Rápidos</p>

                    <nav aria-label='Enlaces Rapidos'>
                        <ul className='flex flex-col gap-2'>
                            {links.map(link => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className='hover:text-yellow font-extralight'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className='mx-auto my-5'>
                    <p className='font-bold mb-6'>Informacion</p>

                    <address className='flex flex-col gap-2'>
                        <p  className='font-extralight'>Av. Belgrano 1340</p>
                        <p  className='font-extralight'>Chajari, Entre Rios</p>
                        <a href={urlWSAPGeneral} target='_blank' className='font-extralight hover:font-normal flex gap-2 items-center cursor-pointer'>
                            <FaWhatsapp size={15} color='green'/>
                            +{telefono}
                        </a>
                        <a href={urlMail} target='_blank'  className='font-extralight hover:font-normal flex gap-2 items-center cursor-pointer'>
                            <CiMail size={15} className='text-yellow'/>
                            {mail}
                        </a>
                    </address>
                </div>
            </div>

            <div className='flex justify-center mt-10 flex-col items-center gap-2'>
                <p className='text-center'>© 2025 AnclaCentro. Todos los derechos reservados.</p>
                <a href="https://www.agustin-lorenzatto.com.ar/"  rel="noopener noreferrer" target='_blank'>Desarrollado por PesulaDev</a>
                
            </div>
        </div>
    </footer>
  )
}

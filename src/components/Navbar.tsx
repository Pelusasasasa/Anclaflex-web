import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

const links = ['Inicio', 'Rubros', 'Nosotros', 'Marcas', 'Contacto'];


export const Navbar = () => {

    const [menu, setMenu] = useState<boolean>(false);

return (
    <div className='flex justify-center items-start bg-dark'>
        <div className='container mx-auto px-4 py-4'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-4'>
                    {/* Todo Logo */}
                    <Image src="/images/Logo.png" alt="logo Blanco y Naranja" width={500} height={500} className='h-10 w-auto'/>
                </div>

                {/* Navegacion Desktop */}
                <nav className='hidden md:flex gap-5 font-helvetica text-light' aria-label='Navegacion Principal'>
                    { links.map((link) => (
                        <a href={`#${link.toLowerCase()}`} className='hover:text-yellow' key={link}>{link}</a>
                    ))}
                </nav>

                <div className='md:hidden'>
                    {!menu && (<AiOutlineMenu size={25} className='text-light hover:cursor-pointer hover:text-yellow' onClick={() => setMenu(true)}/>)}
                    {menu && (<IoCloseOutline size={25} className='text-light hover:cursor-pointer hover:text-yellow' onClick={() => setMenu(false)}/>)}
                </div>
            </div>
            {/* Navegacion Mobile */}
            {menu &&
                (<nav className='md:hidden mt-4 pb-4 border-t border-light pt-4 transition-all duration-300 ease-in-out'>
                    <div className='flex flex-col space-y-4 text-light'>
                        { links.map((link) => (
                            <a href={`#${link.toLowerCase()}`} className='hover:text-yellow' key={link} onClick={() => setMenu(false)}>{link}</a>
                        ))}
                    </div>
                </nav>)
            }            
        </div>
    </div>
)
}

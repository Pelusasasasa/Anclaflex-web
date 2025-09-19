import { useUser } from '@/hooks';
import { User } from '@/interface';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { BsPerson, BsPersonAdd } from 'react-icons/bs';
import { IoCloseOutline } from "react-icons/io5";
import { LuLogOut } from 'react-icons/lu';
import { Button } from './Button';

const links = ['Inicio', 'Rubros', 'Nosotros', 'Marcas', 'Contacto'];


export const Navbar = () => {
    const { user } = useUser();

    const [menu, setMenu] = useState<boolean>(false);

return (
    <div className='flex justify-center items-start bg-dark'>
        <div className='container mx-auto px-4 py-4'>
            <div className='flex justify-between items-center'>
                <a className='flex items-center space-x-4' href='../'>
                    {/* Todo Logo */}
                    <Image src="/images/Logo.png" alt="logo Blanco y Naranja" width={150} height={150} />
                </a>

                {/* Navegacion Desktop */}
                <nav className='hidden md:flex gap-5 font-helvetica text-light' aria-label='Navegacion Principal'>
                    { links.map((link) => (
                        <a href={`/#${link.toLowerCase()}`} className='hover:text-yellow' key={link}>{link}</a>
                    ))}
                </nav>

                <div className='md:hidden'>
                    {!menu && (<AiOutlineMenu size={25} className='text-light hover:cursor-pointer hover:text-yellow' onClick={() => setMenu(true)}/>)}
                    {menu && (<IoCloseOutline size={25} className='text-light hover:cursor-pointer hover:text-yellow' onClick={() => setMenu(false)}/>)}
                </div>

                <Boton user={user}/>

            </div>
            {/* Navegacion Mobile */}
            {menu && <NavegacionMobile setMenu={setMenu} user={user}/>}            
        </div>
    </div>
)
}


interface PropsMobile{
    setMenu: (arg0: boolean) => void;
    user?: User | null; 
};

const NavegacionMobile = ({ setMenu, user}: PropsMobile) => {
        return (
        <nav className='md:hidden mt-4 pb-4 border-t border-light pt-4 transition-all duration-300 ease-in-out'>
            <div className='flex flex-col space-y-4 text-light'>
                { links.map((link) => (
                    <a href={`/#${link.toLowerCase()}`} className='hover:text-yellow' key={link} onClick={() => setMenu(false)}>{link}</a>
                    ))}
            </div>

            

            <div className='md:hidden border-t border-gray-300 py-5 flex mt-5'>
                <BotonMobile user={user}/>
            </div>
        </nav>
    )
};

interface PropsBoton {
    user?: User | null
}

const Boton = ({user}: PropsBoton) => {
    const { startLogOut } = useUser();
    const onLogOut = () => {
        startLogOut();
    }

    if(user){
        return (
        <div className='hidden md:block'>
            <div className='flex gap-2'>
                <Link href='/admin' className={user.rol !== 'cliente' ? 'block' : 'hidden'}>
                    <Button texto='Dashboard' />
                </Link>

                <div className='flex gap-2 items-center'>
                    <BsPerson/>
                    <p>{user.name}</p>
                </div>
                <div onClick={onLogOut} className='flex gap-5 items-center  px-4 py-2 cursor-pointer hover:text-[#d18a1e] text-white rounded-lg'>
                    <LuLogOut/>
                </div>
            </div>
        </div>  
        )
    }

     return (
        <div className='hidden md:block'>
            <Link href='/login' className='flex gap-5 items-center bg-[#ed9b22] px-4 py-2 cursor-pointer hover:bg-[#d18a1e] text-white rounded-lg'>
                <BsPerson/>
                Iniciar Sesion
            </Link>
        </div>
)};

const BotonMobile= ({user}: PropsBoton) => {
    const { startLogOut } = useUser();
    const onLogOut = () => {
        startLogOut();
    }

    if(user){
        return (
        <div className='md:hidden'>
            <div className='flex gap-2'>
                <Link href='/admin' className={user.rol !== 'cliente' ? 'block' : 'hidden'}>
                    <Button texto='Dashboard' />
                </Link>

                <div className='flex gap-2 items-center'>
                    <BsPerson/>
                    <p>{user.name}</p>
                </div>
                <div onClick={onLogOut} className='flex gap-5 items-center  px-4 py-2 cursor-pointer hover:text-[#d18a1e] text-white rounded-lg'>
                    <LuLogOut/>
                </div>
            </div>
        </div>  
        )
    }

     return (
        <div className='md:hidden'>
            <Link href='/login' className='flex gap-5 items-center bg-[#ed9b22] px-4 py-2 cursor-pointer hover:bg-[#d18a1e] text-white rounded-lg'>
                <BsPerson/>
                Iniciar Sesion
            </Link>
        </div>
)};
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { MouseEventHandler } from 'react'
import { BsBoxSeam } from 'react-icons/bs'
import { GoTag } from 'react-icons/go'
import { IoMdStats } from 'react-icons/io'

const AsideBar = () => {
    const router = useRouter();
    const rutaActual = router.asPath.slice(1);
    console.log(rutaActual);

    const handleRouter = (e: React.MouseEvent<HTMLElement>) => {
        router.push(`/${e.currentTarget.id}`)
    };
    
  return (
    <aside className='h-screen bg-gray-500 p-3'>
        <div className='border-b border-gray-300'>
            <Image src="/images/Logo.png" alt="logo Blanco y Naranja" width={200} height={200} priority className='mx-auto'/>
            <h3 className='text-white font-semibold'>Panel Admin</h3>
        </div>

        <div className='mt-5'>
            <div>
                <p>Gestion</p>
                <ul className='flex flex-col gap-2'>
                    <li id='admin' onClick={handleRouter} className={`flex gap-2 items-center hover:cursor-pointer hover:bg-gray-400 rounded-sm pl-1 ${rutaActual === 'admin' && 'bg-gray-400'}`}>
                        <IoMdStats/>
                        <span>DashBoard</span> 
                    </li>
                    <li id='admin/rubros' onClick={handleRouter} className={`flex gap-2 items-center hover:cursor-pointer hover:bg-gray-400 rounded-sm pl-1 ${rutaActual === 'admin/rubros'  && 'bg-gray-400'}`}>
                        <BsBoxSeam />
                        <span>Rubros</span> 
                    </li>
                    <li id='admin/marcas' onClick={handleRouter} className={`flex gap-2 items-center hover:cursor-pointer hover:bg-gray-400 rounded-sm pl-1 ${rutaActual === 'admin/marcas'  && 'bg-gray-400'}`}>
                        <GoTag />
                        <span>Marcas</span> 
                    </li>
                </ul>

            </div>
        </div>
    </aside>
  )
}

export default AsideBar
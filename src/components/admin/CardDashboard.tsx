import React from 'react'
import { Button } from '../Button'
import { IoAddOutline } from 'react-icons/io5'
import { useRouter } from 'next/router'

interface Props {
    textoNuevo: string;
    texto: string;
    ruta: string;
    icon?: React.ReactNode;
    colorBoton?: string;
}


export const CardDashboard = ({textoNuevo, texto, ruta, icon, colorBoton='#ed9b22' }: Props) => {
    const router = useRouter();
  return (
    <div className='border-gray-300 rounded-lg border bg-white'>
        <div className='px-5 py-2'>
            <div className='flex justify-between items-center'>
                <h4 className='font-bold text-gray-800 text-xl'>Gestion {texto}</h4>
                {icon}
            </div>
            <p className='text-gray-600'>Administra {texto}</p>
        </div>
            
        <div className='flex justify-between px-5 py-2'>
            <div onClick={() => router.push(ruta)}>
            <Button texto={`Ver ${texto}`} className={`text-white bg-[${colorBoton}]`}/>
        </div>
            
        <div className='bg-white border border-gray-200 rounded-sm px-2 py-1 flex items-center gap-2 hover:opacity-70 transition-all'>
            <IoAddOutline size={20}/>
            <Button texto={textoNuevo} className='bg-white hover:bg-white'/>
        </div>
        </div>
    </div>
  )
}

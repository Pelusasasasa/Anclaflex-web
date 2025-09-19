
import React from 'react'
import { BsPerson } from 'react-icons/bs';
import { LuLogOut, LuPanelLeft } from "react-icons/lu";
import { useUser } from '@/hooks';
import { User } from '@/interface';

interface Props {
    setAbierto: (arg: boolean) => void;
    abierto: boolean
}

export const HeaderAdmin = ({abierto, setAbierto}: Props) => {
    const { user } = useUser();
  return (
    <div>
        <div className='flex p-2 gap-2'>
            <button className='cursor-pointer text-gray-700' onClick={() => setAbierto(!abierto)}>
                <LuPanelLeft /> 
            </button>
            <div className='border-r border-gray-400'></div>
            <div className='flex justify-between flex-1 items-center'>
                <h3 className='text-black font-semibold'>Panel de Administracion</h3>
                <Boton user={user}/>
            </div>
        </div>
    </div>
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

                <div className='flex gap-2 items-center'>
                    <BsPerson color='black'/>
                    <p className='text-black'>{user.name}</p>
                </div>
                <div onClick={onLogOut} className='flex gap-5 items-center  px-4 py-2 cursor-pointer hover:text-[#d18a1e] text-black rounded-lg'>
                    <LuLogOut />
                </div>
            </div>
        </div>  
        )
    }
};
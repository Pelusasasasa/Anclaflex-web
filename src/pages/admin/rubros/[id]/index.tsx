import React from 'react'
import AdminLayout from '../../AdminLayout'
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';
import { Button } from '@/components/Button';
import FormularioRubroById from '@/components/admin/rubro/FormularioRubroById';

const RubroById = () => {
    const router = useRouter();

    const volver = () => {
        router.back();
    };
  return (
    <AdminLayout>
        <main className='bg-gray-300 text-black h-[calc(100%-3rem)] flex flex-1 flex-col overflow-y-scroll'>
            <div className='space-y-6'>
                <div className='flex gap-2 items-center mx-5 py-2'>
                    <div className='border rounded-sm border-gray-500 flex gap-2 items-center cursor-pointer hover:bg-gray-200' onClick={volver}>
                        <IoIosArrowBack size={25}/>
                        <Button texto='Volver a Rubros' className='bg-transparent hover:bg-transparent' />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Nuevo rubro</h2>
                        <h5 className='text-sm font-semibold text-gray-600'>Agregar Nuevo Rubro</h5>
                    </div>
                </div>

                <FormularioRubroById/>
            </div>
        </main>
    </AdminLayout>
  )
}

export default RubroById
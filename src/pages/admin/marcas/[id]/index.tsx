import React from 'react'
import { useRouter } from 'next/router'
import { useMarca } from '@/hooks'
import { IoIosArrowRoundBack } from 'react-icons/io'

import AdminLayout  from '../../AdminLayout'
import { Button } from '@/components/Button'
import FormularioNuevaMarca from '@/components/admin/FormularioNuevaMarca'

const NuevaMarca = () => {
  const router = useRouter();
  const { limpiarMarcaActiva } = useMarca();

  const volver = () => {
    limpiarMarcaActiva();
    router.back();
  };
  

  return (
    <AdminLayout>
      <main className='bg-gray-300 text-black min-h-[calc(100vh-4rem)] flex flex-1 flex-col'>
        <div className='space-y-6'>

          <div className='flex gap-2 items-center mx-5 py-2'>
            <div className='border rounded-sm border-gray-500 flex gap-2 items-center cursor-pointer hover:bg-gray-200' onClick={volver}>
              <IoIosArrowRoundBack size={25}/>
              <Button texto='Volver a Marcas' className='bg-transparent hover:bg-transparent'/>
            </div>
            <div>
              <h2 className='text-xl font-bold '>Nueva Marca</h2>
              <h5 className='text-sm font-semibold text-gray-600'>Agregar Nueva Marca</h5>
            </div>
          </div>
          
          <FormularioNuevaMarca/>

        </div>
      </main>
    </AdminLayout>
  )
}

export default NuevaMarca
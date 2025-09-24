import React from 'react'
import { AdminLayout } from '../AdminLayout'
import { Button } from '@/components/Button'
import { IoAddOutline } from 'react-icons/io5'
import ListMarca from '@/components/admin/ListMarca'
import { useRouter } from 'next/router'

const MarcasAdmin = () => {
  const router = useRouter();
  const agregarMarca = () => {
    router.push('/admin/marcas/nuevo')
  }

  return (
   <AdminLayout>
    <main className='bg-gray-300'>

      <div className='px-5 flex justify-between py-2 items-center'>
        <div>
          <h2 className='text-2xl text-black font-bold'>Gestion de Marcas</h2>
          <h5 className='text-lg text-gray-600 font-semibold'>Administra las marcas que trabajas y como se muestran</h5>
        </div>

        <div className='flex bg-[#3b82f6] hover:cursor-pointer items-center rounded-lg px-2 hover:opacity-80' onClick={agregarMarca}>
          <IoAddOutline size={20}/>
          <Button texto='Agregar Marca' className='bg-[#3b82f6] hover:bg-[#3b82f6]'/>
        </div>
      </div>

      <ListMarca/>
    </main>
   </AdminLayout>
  )
}

export default MarcasAdmin
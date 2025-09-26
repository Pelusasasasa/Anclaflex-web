import React from 'react'
import AdminLayout  from '../AdminLayout'
import { IoAddOutline } from 'react-icons/io5'
import { Button } from '@/components/Button'

import { useRouter } from 'next/router'
import ListRubro from '@/components/admin/rubro/ListRubro'

const RubrosAdmin = () => {
  const router = useRouter();

  const handleCreateRubro = () => {
    router.push('/admin/rubros/nuevo')
  };

  return (
    <AdminLayout>
      <main className='bg-gray-300 h-[calc(100%-3rem)]'>
        <div className='px-5 flex justify-between py-2 items-center'>
          <div>
            <h2 className='text-2xl text-black font-bold'>Gestion de Rubros</h2>
            <h5 className='text-lg text-gray-600 font-semibold'>AdministraLos rubros que trabajas y como se muestrna en el sitio web</h5>
          </div>

          <div className='flex bg-[#ed9b22] hover:cursor-pointer items-center rounded-lg px-2 hover:opacity-80' onClick={handleCreateRubro}>
            <IoAddOutline size={20}/>
            <Button texto='Agregar Rubros' className='bg-[#ed9b22] hover:bg-[#ed9b22]'/>
          </div>
        </div>

        <ListRubro/>
      </main>
    </AdminLayout>
  )
}

export default RubrosAdmin
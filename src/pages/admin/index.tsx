import React from 'react'
import { CardDashboard } from '@/components/admin/CardDashboard'
import { BsBoxSeam } from 'react-icons/bs'
import { GoTag } from 'react-icons/go'
import AdminLayout from './AdminLayout'

const Index = () => {
  return (
    <AdminLayout >  
      <div  className='text-black bg-[#e6e6e6] p-2 h-full'>
        <div className='mx-5 flex flex-col gap-3 my-2'>
          <h3 className='text-3xl text-gray-800 font-bold'>Binenvenido al Dashboard</h3>
          <p className='font-semibold text-gray-500 text-lg'>Gestiona tu sitio web desde aqui</p>
        </div>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <CardDashboard texto='Rubros' textoNuevo='Nuevo Rubro' ruta='/admin/rubros' icon={<BsBoxSeam color='#ed9b22'/>}/>
          <CardDashboard texto='Marcas' textoNuevo='Nueva Marca' ruta='/admin/marcas' icon={<GoTag color='#3b82f6'/>} colorBoton='#3b82f6'/>
        </section>
      </div>
    </AdminLayout>
  )
}

export default Index;
import { rubros } from '@/data/rubros'
import React from 'react'
import { Rubro } from '@/interface'
import AdminRubroCard from './AdminRubroCard'

const ListRubro = () => {
  return (
    <div className='rounded-lg bg-white shadow-lg border-0 mx-2'>
        <div className='p-6'>
            <div className="overflow-y-auto">
                <table className='w-full border-collapse text-black'>
                    <thead>
                        <tr className='border-gray-200 border-b'>
                            <th className='text-fel py-3 px-4 font-semibold'>Imagen</th>
                            <th className='text-fel py-3 px-4 font-semibold'>Titulo</th>
                            <th className='text-fel py-3 px-4 font-semibold'>Descripcion</th>
                            <th className='text-fel py-3 px-4 font-semibold'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rubros?.map((rubro: Rubro) => (
                            <AdminRubroCard key={rubro.titulo} {...rubro} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ListRubro
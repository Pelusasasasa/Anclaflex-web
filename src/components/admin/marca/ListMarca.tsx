import React, { useEffect } from 'react'
import { MarcaCard } from './MarcaCard'
import { useMarca } from '@/hooks'


const ListMarca = () => {

    const { marcas, startTraerMarcas } = useMarca();

    useEffect(() => {
        startTraerMarcas();
    }, [])

  return (
    <div className='rounded-lg bg-white shadow-lg border-0 mx-2'>
        <div className='p-6'>
            <div className='overflow-y-auto'>
                <table className='w-full border-collapse text-black'>
                    <thead>
                        <tr className='border-gray-200 border-b'>
                            <th className='text-left py-3 px-4 font-semibold'>Logo</th>
                            <th className='text-left py-3 px-4 font-semibold'>Nombre</th>
                            <th className='text-center py-3 px-4 font-semibold'>Mostrar Ambos</th>
                            <th className='py-3 px-4 font-semibold'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marcas?.map(marca => (
                            <MarcaCard key={marca.id} {...marca}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ListMarca
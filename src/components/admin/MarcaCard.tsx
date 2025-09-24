import { useMarca } from '@/hooks'
import { Marca } from '@/interface'
import React from 'react'
import { LiaEdit } from 'react-icons/lia'
import { RiDeleteBin5Line } from 'react-icons/ri'
import Swal from 'sweetalert2'


export const MarcaCard = ({id, nombre, logo, ambos}: Marca) => {
  const { startBorrarMarca } = useMarca();

  const handleDelete = async() => {
    const {isConfirmed} = await Swal.fire({
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      title: 'Eliminar Marca?',
      text: `Seguro quiere eliminar la marca ${nombre}`
    });

    if(isConfirmed){
      startBorrarMarca(id)
    };
  };

  const tdAmbos = ambos 
  ? <p className='inline-flex items-center rounded-full text-xs font-medium px-2.5 py-0.5 bg-green-100 text-green-800 '>Si</p>
  : <p className='inline-flex items-center rounded-full text-xs font-medium px-2.5 py-0.5 bg-gray-100 text-gray-800'>No</p>

  return (
    <tr>
      <td className='p-4'>
        <img src={logo} alt={nombre} />
      </td>
      <td className='p-4'>{nombre}</td>
      <td className='p-4 text-center'>{tdAmbos}</td>
      <td className='p-4'>
        <div className='flex gap-2 items-center justify-center'>
          <LiaEdit size={35} className='border text-[#2563eb] border-[#2563eb] rounded-sm p-2 hover:text-gray-700 cursor-pointer'/>
          <RiDeleteBin5Line onClick={handleDelete} size={35} className='border text-[#dc2626] border-[#dc2626] rounded-sm p-2 hover:text-gray-700 cursor-pointer'/>
        </div>
      </td>
    </tr>
  )
}

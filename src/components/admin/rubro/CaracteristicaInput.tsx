import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

interface Props {
    index: number;
    handleChange: (arg:  React.ChangeEvent<HTMLInputElement>) => void;
}

const CaracteristicaInput = ({index, handleChange}: Props) => {
  return (
    <div className='flex justify-between gap-2 items-center mx-2' key={index} >
        <input type="text" name="caracteristica" id={`caracteristica${index}`} placeholder='Caracterisitca 1' className='border bg-white px-2 py-1 rounded-sm placeholder:text-gray-400 w-full border-gray-400' onChange={handleChange}/>
        <RiDeleteBin6Line size={35} className='text-white border bg-red-500 rounded-sm p-2 cursor-pointer hover:bg-red-600'/>
    </div>
  )
}

export default CaracteristicaInput
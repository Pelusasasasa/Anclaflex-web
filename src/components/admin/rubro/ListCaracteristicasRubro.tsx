import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { Button } from '../../Button'
import CaracteristicaInput from '.././rubro/CaracteristicaInput';

interface Props{
    caracteristicas: string[];
    setCaracterisitcas: (arg: string[]) => void;
}

const ListCaracteristicasRubro = ({caracteristicas = [], setCaracterisitcas}: Props) => {
    const [caracteristicaActual, setCaracteristicaActual] = useState<number>(caracteristicas.length ?? 0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        // const nuevos = [...caracteristicas];
        // nuevos[index] = value

        setCaracterisitcas([
            ...caracteristicas,

        ])
    };

return (
    <div>
            <div className='flex justify-between mx-2 mb-2'>
                <label htmlFor="caracteristicas">Caracteristicas</label>
                <div className='rounded-sm bg-[#ed9b22] hover:bg-[#f36f32] flex text-white items-center'>
                    <IoIosAdd size={25}/>
                    <Button texto='Agregar' className='text-white bg-transparent hover:bg-transparent'/>
                </div>
            </div>    
        {caracteristicas.map((caracteristica, index) => (
            <CaracteristicaInput key={index} index={index} handleChange={handleChange} />
        ))}

        {caracteristicas.length === 0 && (
            <div className='flex justify-between gap-2 items-center mx-2'>
                <input type="text" name="caracteristicas" id="caracteristicas" placeholder='Caracterisitca 1' className='border bg-white px-2 py-1 rounded-sm placeholder:text-gray-400 w-full border-gray-400'/>
            </div>
        )}
    </div>
)}

export default ListCaracteristicasRubro
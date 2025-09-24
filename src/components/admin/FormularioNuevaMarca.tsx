import React, { useState } from 'react'
import { MarcaItem } from '../MarcaItem'
import { Button } from '../Button';
import { LuSave } from 'react-icons/lu';
import { useRouter } from 'next/router';
import { useMarca } from '@/hooks';

const FormularioNuevaMarca = () => {
    const [nombre, setNombre] = useState<string>('');
    const [logo, setLogo] = useState<string>('');
    const [ambos, setAmbos] = useState<boolean>(false);
    const [enviado, setEnviado] = useState<boolean>(false);

    const router = useRouter();
    const { startCrearMarca } = useMarca();

    const volver = () => {
        router.back();
    };

    const handleCreateMarca = async(e: React.FormEvent) => {
        e.preventDefault();

        if(!nombre || nombre === '') {
            setEnviado(true);
            return;
        };

        const ok = await startCrearMarca({
            nombre,
            logo,
            ambos
        });

        if(ok){
            router.back();
        }
    }

  return (
    <div className='grid grid-cols-2 gap-6 h-full'>

        <div className='bg-white mx-5 rounded-lg shadow-lg px-5 py-2'>
            <fieldset className='text-xl font-bold'>Informacion de la Marca</fieldset>
            <form onSubmit={handleCreateMarca}>

                <div className='flex flex-col mt-5'>
                    <label htmlFor="nombre">Nombre de la Marca *</label>
                    <input 
                        className='p-2 border border-gray-400 rounded-sm' 
                        type="text"
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        placeholder='Anclaflex' 
                        name="nombre" 
                        id="nombre"
                    />
                    {enviado && nombre === '' && <p className='text-red-600'>El nombre es obligatorio</p>}
                </div>

                <div className='flex flex-col mt-5'>
                    <label htmlFor="logo">URL de Logo</label>
                    <input 
                        className='p-2 border border-gray-400 rounded-sm' 
                        type="text"
                        placeholder='https://ejemplo.com/logo.png' 
                        name="logo" 
                        id="logo"
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)}
                    />
                </div>

                <div className='flex gap-5 mt-5'>
                    <input type="checkbox" checked={ambos} onChange={(e) => setAmbos(e.target.checked)} name="ambos" id="ambos" className='scale-125 cursor-pointer'/>
                    <div>
                        <label htmlFor="ambos">Mostrar Logo y Texto</label>
                        <p className='text-xs text-gray-600'>Si esta Marcado se mostrara el logo y el nombre, sino solamente el nombre</p>
                    </div>
                </div>


                <div className='mt-5 flex justify-end gap-5 items-center'>
                    <div onClick={volver}>
                        <Button texto='Cancelar' className='text-black bg-white border border-gray-400 hover:opacity-80 hover:bg-white'/>
                    </div>
                    <div className='bg-[#3b82f6] px-2  py-1 cursor-pointer flex gap-2 items-center border rounded-sm text-white hover:opacity-80' >
                        <LuSave  size={25}/>
                        <Button tipo='submit' texto='Crear Marca' className='bg-transparent hover:bg-transparent'/>
                    </div>
                </div>
            </form>
        </div>

        <div className='bg-white mx-5 rounded-lg shadow-lg px-5 py-2'>
            <h3 className='text-xl font-bold'>Vista Previa</h3>

            <div className='mt-2 flex flex-col gap-5 bg-gray-200 p-5'>
                <p className='text-sm text-gray-600'>Asi se vera la marca en el sitio Web</p>
                <MarcaItem id={1} nombre={nombre} ambos={ambos} logo={logo}/>
            </div>
        </div>

    </div>
  )
}

export default FormularioNuevaMarca
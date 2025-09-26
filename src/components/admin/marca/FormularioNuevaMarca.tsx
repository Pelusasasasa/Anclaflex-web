import React, { useEffect, useState } from 'react'
import { MarcaItem } from '../MarcaItem'
import { Button } from '../Button';
import { LuSave } from 'react-icons/lu';
import { useRouter } from 'next/router';
import { useMarca } from '@/hooks';

const FormularioNuevaMarca = () => {
    const router = useRouter();
    const id = router.asPath.split('/')[3];

    const { startActiveMarca, startCrearMarca, activeMarca, startModificarMarca, limpiarMarcaActiva } = useMarca();

    const [nombre, setNombre] = useState<string>(activeMarca?.nombre ?? '');
    const [file, setFile] = useState<File | null>(null);
    const [logo, setLogo] = useState<string>(activeMarca?.logo ?? '');
    const [ambos, setAmbos] = useState<boolean>(activeMarca?.ambos ?? false);
    const [enviado, setEnviado] = useState<boolean>(false);

    useEffect(() => {
        if(id !== 'nuevo'){
            startActiveMarca(Number(id))
        };
    }, []);

    useEffect(() => {
        setNombre(activeMarca?.nombre ?? '');
        setAmbos(activeMarca?.ambos ?? false)
    }, [activeMarca])

    const volver = () => {
        limpiarMarcaActiva();
        router.back();
    };

    const handleCreateMarca = async(e: React.FormEvent) => {
        e.preventDefault();

        if(!nombre || nombre === '') {
            setEnviado(true);
            return;
        };

        const ok = await startCrearMarca({nombre, file, ambos});

        if(ok){
            router.back();
        }
    };

    const handleFile = async(e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]){
            setFile(e.target.files[0]);
            setLogo(URL.createObjectURL(e.target.files[0]))
        };
    };

    const handlePatchMarca = async(e: React.FormEvent) => {
        e.preventDefault();

        if(!nombre || nombre === ''){
            setEnviado(true);
            return;
        };

        const ok = await startModificarMarca({id: Number(id), nombre, file, ambos});
        if(ok){
            router.back();
        }
    };

return (
    <div className='grid grid-cols-2 gap-6 h-full'>

        <div className='bg-white mx-5 rounded-lg shadow-lg px-5 py-2'>
            <fieldset className='text-xl font-bold'>Informacion de la Marca</fieldset>
            <form onSubmit={id !== 'nuevo' ? handlePatchMarca : handleCreateMarca}>

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
                    <label htmlFor="file">URL de Logo</label>
                    <input 
                        className='p-2 border border-gray-400 rounded-sm' 
                        type="file"
                        placeholder='https://ejemplo.com/logo.png' 
                        name="file" 
                        id="file"
                        accept='image*/'
                        onChange={handleFile}
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
                        <Button tipo='submit' texto={activeMarca?.id ? 'Modificar Marca' : 'Crear Marca'} className='bg-transparent hover:bg-transparent'/>
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
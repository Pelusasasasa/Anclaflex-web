import React, { useEffect } from 'react'
import { Button } from '../Button'
import { useForm } from '@/hooks';

const initialForm = {
  titulo: '',
  img: '',
  texto: '',
  textoDescriptivo: '',
  textoWhatsApp: '',
  aplicaciones: [],
  caracteristicas: []
}

const FormularioRubroById = () => {

  const { titulo, img, texto, textoDescriptivo, textoWhatsApp, aplicaciones, caracteristicas, formState, onInputChange } = useForm(initialForm);

  useEffect(() => {
    console.log(formState)
  }, [formState])

  return (
    <form className='flex flex-col gap-5 px-3'>
      <div className='bg-white rounded-sm shadow-xl'>
        <h5 className='text-xl px-2 py-2 font-semibold'>Informacion Basica</h5>
        <div className=' grid grid-cols-2 p-5 gap-5'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="titulo">Titulo *</label>
            <input placeholder='Ej: Griferia' className='border border-gray-400 bg-white px-2 py-1 rounded-sm placeholder:text-gray-400' type="text" name="titulo" id="titlu" value={titulo} onChange={onInputChange}/>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="img">Imagen </label>
            <input className='border bg-white px-2 py-1 rounded-sm placeholder:text-gray-300' type="file" name="img" id="img" />
          </div>

          <div className='flex flex-col gap-2 col-span-2'>
            <label htmlFor="texto">Descripcion Corta *</label>
            <input name="texto" id="texto" className='border border-gray-400 bg-white px-2 py-1 rounded-sm placeholder:text-gray-400' value={texto} onChange={onInputChange} />
          </div>
        </div>
      </div>

      <div className='bg-white rounded-sm shadow-xl'>
        <h5 className='text-xl px-2 py-2 font-semibold'>Informacion Detallada</h5>
        <div className='grid grid-cols-1 p-5 gap-5'>

          <div className='flex flex-col gap-2'>
            <label htmlFor="textoDescriptivo">Introduccion</label>
            <textarea name="textoDescriptivo" id="textoDescriptivo" className='border border-gray-400 bg-white px-2 py-1 rounded-sm placeholder:text-gray-400' value={textoDescriptivo} onChange={onInputChange}></textarea>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="textoWhatsApp">Texto WhatsApp</label>
            <input name="textoWhatsApp" id="textoWhatsApp" className='border border-gray-400 bg-white px-2 py-1 rounded-sm placeholder:text-gray-400' value={textoWhatsApp} onChange={onInputChange} />
          </div>

          <div>
            <label htmlFor="caracteristicas">Caracteristicas</label>
            <input type="text" name="caracteristicas" id="caracteristicas" placeholder='Caracterisitca 1' className='border bg-white px-2 py-1 rounded-sm placeholder:text-gray-400 w-full border-gray-400'/>
          </div>

          <div>
            <label htmlFor="aplicaciones">Aplicaciones</label>
            <input type="text" name="aplicaciones" id="aplicaciones" placeholder='Aplicacion 1' className='border bg-white px-2 py-1 rounded-sm placeholder:text-gray-400 w-full border-gray-400'/>
          </div>


          
        </div>
      </div>

      <div className='flex justify-end gap-2'>
        <div>
          <Button texto='Cancelar' className='bg-transparent text-gray-800 border border-gray-400 hover:bg-gray-200'/>
          
        </div>

        <div className='bg-[#ed9b22] rounded-sm hover:bg-[#f36f32]'>
          <Button texto='Crear rubro' className='bg-transparent hover:bg-transparent text-white'/>
        </div>
      </div>

    </form>
  )
}

export default FormularioRubroById
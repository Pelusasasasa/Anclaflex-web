import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { rubros } from '@/data/rubros';
import { Rubro } from '@/interface/rubro';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoMdCheckmarkCircleOutline, IoMdStarOutline } from 'react-icons/io';

export default function RubroScreen(){
  const pathName = usePathname();
  const [rubro, setRubro] = useState<Rubro>()


  
  useEffect(() => {
    if(pathName){
      const rubroTraido = rubros.find(elem => elem.titulo.toLowerCase() === pathName.split('/')[2]);
      setRubro(rubroTraido)
    }
  }, [pathName]);
  

  if(!rubro){
    return (
      <div>
        <h3>Cargandoooo...</h3>
      </div>
    )
  }


  return (
    <section className='bg-light'>
      <Navbar/>

      <article className='text-dark font-helvetica py-12'>
        <div className='mx-auto continer px-4'>
          <div className='grid grid-cols-1 gap-12 items-center lg:grid-cols-2'>
              <div className='relative'>
                <Image src={rubro.img} alt={`Imagen principal del rubro ${rubro.titulo}`} width={800} height={600} className='w-full h-auto rounded-lg shadow-2xl'/>
              </div>

              <div>
                <h1 className='text-4xl md:text-5xl mb-6 font-bold'>{rubro.titulo}</h1>

                <p className='text-xl mb-8 leading-relaxed'>{rubro.textoDescriptivo}</p>

                <div className='text-light flex-col md:flex-row flex gap-4 mb-8'>
                  <Button type='whatsapp' texto='Consultar por WhatsApp'/>
                  <Button type='mail' texto='Enviar Mail'/>
                </div>
              </div>
          </div>
        </div>
      </article>

      <article className='text-dark font-helvetica py-12 bg-gray-300'>
        <div className='mx-auto container px-4'>

          <div >
            <h2 className='text-center text-4xl md:text-5xl font-bold mb-12'>Caracteristicas y Aplicaciones</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>

              <div className='bg-white pl-7 pr-20 py-4 rounded-lg shadow-2xl'>
                <h3 className='text-xl text-start mb-6 flex gap-2'>
                  <IoMdCheckmarkCircleOutline className='text-yellow' size={25}/> 
                  Caracteristicas
                </h3>
                
                <ul className='space-y-3'>
                  {
                    rubro.caracteristicas?.map((caracteristica, index) => (
                      <li key={index} className='text-dark flex gap-2'>
                        <IoMdStarOutline className='text-yellow' size={20}/>
                        {caracteristica}
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className='bg-white pl-7 pr-20 py-4 rounded-lg shadow-2xl'>
                <h3 className='text-xl text-start mb-6 flex gap-2'>
                <IoMdCheckmarkCircleOutline className='text-yellow' size={25}/> 
                  Aplicaciones
                </h3>

                <ul className='space-y-3'>
                  {
                    rubro.aplicaciones?.map((rubro, index) => (
                      <li key={index} className='text-dark flex gap-2'>
                        <IoMdStarOutline className='text-yellow' size={20}/>
                        {rubro}
                      </li>
                    ))
                  }
                </ul>
              </div>

            </div>
          </div>
        </div>
      </article>

      <Footer/>
    </section>
  )
}

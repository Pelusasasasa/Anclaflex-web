import { Rubro } from '@/interface/rubro'
import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md';
import { Button } from './Button';
import { urlWSAP } from '@/data/variables';

interface Props extends Rubro {
    whatsApp?: boolean;
    mail?: boolean;
}

export const RubroCard = ({ titulo, texto, textoWhatsApp, img, whatsApp, mail}: Props) => {
    const router = useRouter()

    const navegar = () => {
        router.push(`/rubro/${titulo.toLowerCase()}`)
    };

    console.log(urlWSAP + textoWhatsApp);

    return (

    <article className='p-0 group hover:shadow-xl shadow-xs bg-white rounded-t-lg rounded-b-lg flex flex-col'>
    
        <div className='relative h-48 overflow-hidden rounded-t-lg'>
            <Image width={500} height={500} src={img} alt={`Imagen de ${titulo}`} className='h-52 rounded-t-lg object-cover group-hover:scale-105 transition-transform duration-300'/>
            <div className='bg-gradient-to-t from-black/50 to-transparent absolute inset-0'></div>
        </div>

        <div className=' px-10 py-5'>
            <header>                
                <h3 className='text-dark text-2xl font-semibold'>{titulo}</h3>
            </header>
            <p className='text-gray-500'>{texto}</p>
        </div>

        <div className='flex flex-col mt-auto'>
            <h3 className='text-lg text-center text-yellow'>¡Consultanos tu Presupuesto!</h3>

            <div className='flex justify-center text-light gap-5 pt-3 pb-5'>
                { whatsApp  && (
                    <a href={`${urlWSAP}${textoWhatsApp}`} target='_blank'>
                        <Button type='whatsapp' texto='WhatsApp'/>
                    </a>
                )}

                { mail  && (
                    <button onClick={navegar} className='bg-dark flex items-center gap-3 py-1 px-3 rounded-sm hover:cursor-pointer hover:bg-yellow-600'>
                        <p>Ver Mas</p>
                        <MdArrowForwardIos/>
                    </button>
                )}
            </div>
        </div>
    </article>
)
}

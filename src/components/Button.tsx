import React from 'react'
import { CiMail } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';

interface Props {
    texto?: string;
    className?: string;
    type?: string;
    tipo?: 'button' | 'submit';
  }

export const Button = ({texto, className, type, tipo}: Props) => {

  if(type === 'whatsapp'){
    return (
      <button className={`bg-green-600 justify-center flex items-center gap-3 py-1 px-3 rounded-sm hover:cursor-pointer hover:bg-green-700 ${className}`}>
          <FaWhatsapp size={15} />
          <p>{texto}</p>
      </button>
    )
  };

  if(type === 'mail'){
      return (
        <button className='bg-yellow justify-center flex items-center gap-3 py-1 px-3 rounded-sm hover:cursor-pointer hover:bg-yellow-600'>
            <CiMail size={15} />
            <p>{texto}</p>
        </button>
      )
  }


  return (
        <button type={tipo ?? 'button'} className={`bg-yellow flex items-center gap-3 py-1 px-3 rounded-sm hover:cursor-pointer hover:bg-orange ${className}`}>
            <p>{texto}</p>
        </button>
      )


}

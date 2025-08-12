
import { Button } from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { IoLockClosedOutline } from 'react-icons/io5'

const Login = () => {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({usuario, password})
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#e6e6e6] to-white flex items-center justify-center p-4'>
      <div className='rounded-lg w-full text-gray-300 bg-gray-500 max-w-md shadow-2xl border-0'>
        <div className='p-8'>
          <div className='text-center mb-8 '>
            
            <Link href='/'>
              <Image src="/images/Logo.png" alt="logo Blanco y Naranja" width={200} height={200} className='mx-auto'/>
            </Link>
            
            <h1 className='font-semibold text-2xl my-2 text-white'>Iniciar Sesion</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label htmlFor="usuario">Usuario</label>
              <div className='flex items-center gap-2 w-full border-gray-300 border rounded-lg bg-white'>
                <BsPerson color='black' size={20}/>
                <input type="text" name="usuario" id="usuario" value={usuario} onChange={e => setUsuario(e.target.value)} placeholder='Ingresa Tu Usuario' className='placeholder:text-gray-600 text-black px-2 py-1 w-full'/>
              </div>
            </div>

            <div>
              <label htmlFor="password">Contraseña</label>
              <div className='flex items-center gap-2 w-full border-gray-300 border rounded-lg bg-white'>
                <IoLockClosedOutline  color='black' size={20}/>
                <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Ingresa Tu Contraseña' className='placeholder:text-gray-600 px-2 text-black py-1 w-full'/>
              </div>
            </div>


            <div className='mt-4 w-full'>
              <Button tipo='submit'  texto='Iniciar Sesion' className='w-full text-white justify-center text-xl font-semibold'/>
            </div>

          </form>

          <div className='justify-center flex mt-5'>
            <Link href='/' className='text-orange-500 flex gap-2 items-center hover:text-orange-600'>
              <IoIosArrowRoundBack size={25}/>
              <p>Volver al sitio Web</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
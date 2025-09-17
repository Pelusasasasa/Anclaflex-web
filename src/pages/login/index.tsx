
import { Button } from '@/components/Button'
import { verMensajesLogin } from '@/herlpers/mensageLogin'
import { supabase } from '@/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { IoLockClosedOutline } from 'react-icons/io5'

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {data, error} = await supabase.auth.signInWithPassword({email, password});
      if(error){
        return setMessage(verMensajesLogin(error.code || ''))
      };

      router.push('/');

    } catch (error) {
      console.log(error);
      setMessage('Error Al ingresar usurio')
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#343333] to-[#a5a4a4] flex items-center justify-center p-4'>
      <div className='rounded-lg w-full text-gray-300 bg-gray-500 max-w-md shadow-2xl border-0'>
        <div className='p-8'>
          
          <div className='text-center mb-8 '>
            
            <Link href='/'>
              <Image src="/images/Logo.png" alt="logo Blanco y Naranja" width={200} height={200} className='mx-auto'/>
            </Link>
            
            <h1 className='font-semibold text-2xl my-2 text-white'>Iniciar Sesion</h1>
          </div>
          
          {message && <div className='bg-white rounded-lg '><p className='text-lg m-0 text-center mt-2 text-red-600'>{message}</p></div>}

          <form onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label htmlFor="usuario">Usuario</label>
              <div className='flex items-center gap-2 w-full border-gray-300 border rounded-lg bg-white'>
                <BsPerson color='black' size={20}/>
                <input type="text" name="usuario" id="usuario" value={email} onChange={e => setEmail(e.target.value)} placeholder='Ingresa Tu Usuario' className='placeholder:text-gray-600 text-black px-2 py-1 w-full'/>
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
              <Button tipo='submit' disabled={loading}  texto={loading ? 'Iniciando...' : 'Iniciar Sesion'} className='w-full text-white justify-center text-xl font-semibold'/>
              <div className='flex gap-2 items-center justify-center mt-1'>
                <p>¿No tienes cuenta?</p>
                <Link href='/register' className='text-[#ed9b22]'>Registrate Aqui</Link>
              </div>
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
import { Button } from '@/components/Button'
import { supabase } from '@/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { IoLockClosedOutline } from 'react-icons/io5'

const Register = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [menssage, setMenssage] = useState<string>('');

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(email.length <= 0) return setMenssage('Ingresa un Email')
          if(user.length <= 0) return setMenssage('Ingresa un Nombre de Usuario');
        if(password.length < 6) return setMenssage('La contaseña debe tener mas de 6 caracteres')

        const {error, data} = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              name: user,
              rol: 'cliente'
            },
            emailRedirectTo: `${window.location.origin}/login`
          }
        });

        if(error){
          setMenssage(error.message)
        }else{
          setMenssage('✅ Revise su email y confirma tu cuenta para poder iniicar sesion')
        };
    };

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#343333] to-[#a5a4a4] flex items-center justify-center p-4'>
      <div className='rounded-lg w-full text-gray-300 bg-gray-500 max-w-md shadow-2xl border-0'>
        <div className='p-8'>
          <div className='text-center mb-8 '>
            
            <Link href='/'>
              <Image src="/images/Logo.png" alt="logo Blanco y Naranja" width={200} height={200} className='mx-auto'/>
            </Link>
            
            <h1 className='font-semibold text-2xl my-2 text-white'>Registrar Usuario</h1>
          </div>

          <form onSubmit={handleSubmit}>
            {menssage && <p className='text-center text-[#8e2629] text-xl font-semibold'>{menssage}</p>}
            <div className='mb-2'>
              <label htmlFor="email">Email</label>
              <div className='flex items-center gap-2 w-full border-gray-300 border rounded-lg bg-white'>
                <CgMail color='black' size={20}/>
                <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Ingresa Tu Email' className='placeholder:text-gray-600 text-black px-2 py-1 w-full'/>
              </div>
            </div>

            <div className='mb-2'>
              <label htmlFor="user">Usuario</label>
              <div className='flex items-center gap-2 w-full border-gray-300 border rounded-lg bg-white'>
                <BsPerson color='black' size={20}/>
                <input type="text" name="user" id="user" value={user} onChange={e => setUser(e.target.value)} placeholder='Ingresa Tu Usuario' className='placeholder:text-gray-600 text-black px-2 py-1 w-full'/>
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
              <Button tipo='submit'  texto='Registrar Usuario' className='w-full text-white justify-center text-xl font-semibold'/>
              <div className='flex gap-2 items-center mt-1 justify-center'>
                <p>¿Ya tienes cuenta?</p>
                <Link href='/login' className='text-[#ed9b22]'>Iniciar Sesion</Link>
              </div>
            </div>

          </form>

          <div className='justify-center flex mt-5'>
            <Link href='/' className='text-[#ed9b22] flex gap-2 items-center hover:text-orange-600'>
              <IoIosArrowRoundBack size={25}/>
              <p>Volver al sitio Web</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
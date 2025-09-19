import AsideBar from '@/components/admin/AsideBar'
import { HeaderAdmin } from '@/components/admin/HeaderAdmin'
import React, { ReactNode, useState } from 'react'

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  const [abierto, setAbierto] = useState<boolean>(true);

  return (
    <div className='bg-white h-screen flex'>
      <AsideBar abierto={abierto}/>
      <main className={`${!abierto ? 'w-full' : 'flex-1'}`}>
        <HeaderAdmin abierto={abierto} setAbierto={setAbierto}/>
        {children}
      </main>
    </div>
  )
}

export default AdminLayout
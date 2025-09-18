import AsideBar from '@/components/admin/AsideBar'
import { HeaderAdmin } from '@/components/admin/HeaderAdmin'
import React from 'react'

const MarcasAdmin = () => {
  return (
    <div className='bg-white h-screen flex'>
        <AsideBar/>
        <main className='flex-1'>
            <HeaderAdmin/>
        </main>
    </div>
  )
}

export default MarcasAdmin
import { Rubro } from '@/interface'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { LiaEdit } from 'react-icons/lia'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Swal from 'sweetalert2'

const AdminRubroCard = ({id, titulo, img, textoDescriptivo, texto}: Rubro) => {
  const router = useRouter();

  const enviarAPaginaRubro = () => {
    router.push(`/rubro/${titulo.toLowerCase()}`)
  }

  const handlePatchRubro = () => {
    router.push(`/admin/rubros/${id}`)
  };

  const handleDelete = async() => {
    await Swal.fire({
      confirmButtonText: 'Eliminar',
      showCancelButton: true,
      title: 'Eliminar Rubro',
      text: `Seguro quiere Eliminar el Rubro ${titulo}`
    })

    console.log('Eliminado Rubro');
  };

  return (
    <tr>
        <td className='p-4'>
            { img !== '' && <Image alt={titulo} src={img} width={45} height={45} className='w-auto h-auto rounded-sm'/>}
        </td>
        <td className='p-4'>{titulo}</td>
        <td className='p-4'>{texto}</td>
        <td className='p-4'>
            <div className='flex gap-2 items-center justify-center'>
                <MdOutlineRemoveRedEye onClick={enviarAPaginaRubro} size={35} className='border text-[#2563eb] border-[#2563eb] rounded-sm p-2 hover:text-gray-700 cursor-pointer'/>
                <LiaEdit size={35} className='border text-[#ed9b22] border-[#ed9b22] rounded-sm p-2 hover:text-gray-700 cursor-pointer' onClick={handlePatchRubro}/>
                <RiDeleteBin6Line size={35} onClick={handleDelete} className='border text-[#dc2626] border-[#dc2626] rounded-sm p-2 hover:text-gray-700 cursor-pointer'/>
            </div>
        </td>
    </tr>
  )
}

export default AdminRubroCard
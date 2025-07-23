import Image from 'next/image'
import React from 'react'

export const Nosotros = () => {
  return (
    <div className='container mx-auto'>
        <div className='p-4'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col gap-5 text-dark font-helvetica'>
                    <h3 className='text-4xl  font-bold'>Sobre Anclacentro</h3>

                    <p>
                        Con más de 20 años de experiencia en el mercado,
                        Anclaflex se ha consolidado como una empresa líder en la distribución de pinturas,
                        perfiles y accesorios para la construcción.
                    </p>

                    <p>
                        Nuestro compromiso es brindar productos de la más alta calidad,
                        respaldados por las mejores marcas del mercado y un servicio personalizado que garantiza la satisfacción de nuestros clientes.
                    </p>

                    <p>
                        Trabajamos tanto con profesionales de la construcción como con particulares,
                        ofreciendo asesoramiento técnico especializado y soluciones integrales para cada proyecto.
                    </p>
                </div>

                <div>
                    <Image />
                </div>
            </div>
        </div>
    </div>
  )
}

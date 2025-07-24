import Image from 'next/image'
import React from 'react'

export const Nosotros = () => {
  return (
    <section className='py-20 bg-white' id='nosotros'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 my-15'>
                    <div className='flex flex-col gap-5 text-dark font-helvetica'>
                        <h2 className='text-4xl md:text-5xl mb-6 font-bold'>Sobre Nosotros</h2>

                        <article className='space-y-6 text-lg text-dark'>
                            <p>
                                <strong>AnclaCentro</strong> es líder en la distribución de materiales para la construcción, ofreciendo productos de máxima calidad en rubros como grifería, pinturas, revestimientos plásticos, placas de PVC y construcción en seco.
                            </p>

                            <p>
                                Nos respaldan las mejores marcas del mercado y un servicio personalizado que asegura la satisfacción de nuestros clientes.
                            </p>

                            <p>
                                Trabajamos junto a profesionales de la construcción y particulares, brindando asesoramiento técnico y soluciones integrales para cada proyecto.
                            </p>
                        </article>
                    </div>

                    <div className='relative'>
                        <Image src='/images/Nosostros.webp' alt='Fachada de la empresa Anclacentro en su local principal' width={600} loading='lazy' decoding='async'  height={500} className='shadow-2xl rounded-lg' />
                    </div>
                </div>
            </div>
    </section>
  )
}

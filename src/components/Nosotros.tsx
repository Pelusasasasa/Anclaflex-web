import Image from 'next/image'
import React from 'react'

export const Nosotros = () => {
  return (
    <section className='py-20 bg-white' id='nosotros'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 my-15'>
                    <div className='flex flex-col gap-5 text-dark font-helvetica'>
                        <h2 className='text-4xl md:text-5xl mb-6 font-bold'>Sobre Anclacentro</h2>

                        <article className='space-y-6 text-lg text-dark'>
                            <p>
                                Con más de 20 años de experiencia, <strong>Anclaflex</strong> lidera el mercado en pinturas, perfiles y accesorios para la construcción.
                            </p>

                            <p>
                                Nuestro compromiso es brindar productos de la más alta calidad,
                                respaldados por las mejores marcas del mercado y un servicio personalizado que garantiza la satisfacción de nuestros clientes.
                            </p>

                            <p>
                                Trabajamos tanto con profesionales de la construcción como con particulares,
                                ofreciendo asesoramiento técnico especializado y soluciones integrales para cada proyecto.
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

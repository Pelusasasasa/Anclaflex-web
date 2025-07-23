import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { Marcas } from "@/components/Marcas";
import { Navbar } from "@/components/Navbar";
import { Nosotros } from "@/components/Nosotros";
import { Rubros } from "@/components/Rubros";
import { SliderPrincipal } from "@/components/SliderPrincipal";


import { helvetica } from "@/fonts/helvetica";

export default function Home() {
  return (
    <div className={`${helvetica.variable} bg-white min-h-screen`}>
      <Navbar/>
      <SliderPrincipal/>
      <Rubros/>
      <Nosotros/>
      <Marcas/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { Marcas } from "@/components/Marcas";
import { Navbar } from "@/components/Navbar";
import { Nosotros } from "@/components/Nosotros";
import { Rubros } from "@/components/Rubros";
import { SliderPrincipal } from "@/components/SliderPrincipal";


import { helvetica } from "@/fonts/helvetica";
import { useUser } from "@/hooks";
import { supabase } from "@/supabase/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { setActiveUser } = useUser();

  useEffect(() => {
    supabase.auth.onAuthStateChange((e, session) => {
      if(!session) return router.push('/') ;

      const {user} = session;

      const userLike = {
        email: user.email || '',
        name: user.user_metadata.name,
        rol: user.user_metadata.rol
      };
      setActiveUser(userLike);
    });
  }, []);

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

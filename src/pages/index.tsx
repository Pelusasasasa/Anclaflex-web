import { Navbar } from "@/components/Navbar";
import { Nosotros } from "@/components/Nosotros";
import { Rubros } from "@/components/Rubros";
import { helvetica } from "@/fonts/helvetica";

export default function Home() {
  return (
    <div className={`${helvetica.variable} bg-white min-h-screen`}>
      <Navbar/>
      <Rubros/>
      <Nosotros/>
    </div>
  );
}

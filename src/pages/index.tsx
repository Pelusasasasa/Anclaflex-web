import { Navbar } from "@/components/Navbar";
import { helvetica } from "@/fonts/helvetica";

export default function Home() {
  return (
    <div className={`${helvetica.variable} bg-white min-h-screen`}>
      <Navbar/>
    </div>
  );
}

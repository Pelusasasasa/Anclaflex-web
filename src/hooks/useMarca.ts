import { Marca } from "@/interface";
import { userMarcaStore } from "@/store/useMarcaStore"
import { supabase } from "@/supabase/client";

export const useMarca = () => {
    const {marcas, setMarcas} = userMarcaStore();

    const startBorrarMarca = async(id: number) => {
        try {
            const data = await supabase.from('marca').delete().eq('id', id);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const startCrearMarca = async(marca: Marca) => {
        try {
            const data = await supabase.from('marca').insert(marca);
            console.log(data);
        } catch (error) {
            console.log(error);
        };
    };

    const startTraerMarcas = async() => {
        try {
            const {error, data} = await supabase.from('marca').select('*');
            if(error) throw new Error(error.message);

            setMarcas(data)

        }catch (error) {
            console.log(error);
        }
    };

    return {
        //atributos
        marcas,

        //metodos
        startBorrarMarca,
        startCrearMarca,
        startTraerMarcas,
    }
}
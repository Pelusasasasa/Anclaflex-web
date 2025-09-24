import { verMensajeMarca } from "@/helpers/mensageMarca";
import { Marca } from "@/interface";
import { userMarcaStore } from "@/store/useMarcaStore"
import { supabase } from "@/supabase/client";
import Swal from "sweetalert2";

export const useMarca = () => {
    const {marcas, setMarcas, addMarca, deleteMarca} = userMarcaStore();

    const startBorrarMarca = async(id: number) => {
        try {
            const {error, status} = await supabase.from('marca').delete().eq('id', id);
            if(error) throw new Error(error.message);

            if(status === 204){
                deleteMarca(id)
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    const startCrearMarca = async(marca: Marca): Promise<boolean> => {
        try {
            const {error, status, data} = await supabase.from('marca').insert(marca).select();
            
            if(error) throw await Swal.fire(verMensajeMarca(error.code), '', 'error');

            if(status !== 201) throw await Swal.fire('No se pudo cargar la marca, hable con el administrador', '', 'error');

            addMarca(data[0])

            return true

        } catch (error) {
            console.log(error);
            return false
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
import { subirLogo } from "@/helpers";
import { verMensajeMarca } from "@/helpers/mensageMarca";

import { userMarcaStore } from "@/store/useMarcaStore"
import { supabase } from "@/supabase/client";
import Swal from "sweetalert2";

interface Marca {
    id?: number;
    nombre: string;
    file: File | null;
    ambos: boolean;
}

export const useMarca = () => {
    const {marcas, activeMarca, setActiveMarca, setMarcas, addMarca, deleteMarca, patchMarca, clearActive} = userMarcaStore();

    const limpiarMarcaActiva = () => {
        clearActive();
    };

    const startActiveMarca = (id: number) => {
        const marca = marcas.find(marca => marca.id === id);
        if(marca) setActiveMarca(marca);
    };

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
        let url: string = '';
        try {
            //Subimos primero el logo si es que esta
            if(marca.file){
                url = await subirLogo(marca.file, marca.nombre)  
            };
            const {error, status, data} = await supabase.from('marca').insert({logo: url, nombre: marca.nombre, ambos: marca.ambos}).select();
            console.log(data);
            console.log(error);
            if(error) throw await Swal.fire(verMensajeMarca(error.code), '', 'error');

            if(status !== 201) throw await Swal.fire('No se pudo cargar la marca, hable con el administrador', '', 'error');
            addMarca(data[0])

            return true;

        } catch (error) {
            console.log(error);
            return false
        };
    };

    const startModificarMarca = async(marca: Marca): Promise<boolean> => {
        try {
            const nuevosDatos = {
                nombre: marca.nombre,
                ambos: marca.ambos,
                logo: marca.file ? await subirLogo(marca.file, marca.nombre) : ''
            };

            const {error, status, data } = await supabase.from('marca').update(nuevosDatos).eq('id', marca.id).select();
            if(error) throw new Error(error.message);

            if(status !== 200) throw await Swal.fire('No se pudo modificar la marca, hable con el administrador', '', 'error');
            patchMarca(data[0]);
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
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
        activeMarca,
        marcas,

        //metodos
        limpiarMarcaActiva,
        startActiveMarca,
        startBorrarMarca,
        startCrearMarca,
        startModificarMarca,
        startTraerMarcas,
    }
}
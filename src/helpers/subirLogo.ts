import { supabase } from "@/supabase/client";
import { getPublicURL } from "./getURLPublicLogo";

export const subirLogo = async(file: File, nombre: string): Promise<string> => {
    const { error} = await supabase.storage.from('logos').upload(`marcas/${nombre}/${file.name}`, file, {
        cacheControl: '3600',
        upsert: false
    });

    if(error) throw new Error(error.message);
    const url = await getPublicURL(`marcas/${nombre}/${file.name}`);
    return url;
};
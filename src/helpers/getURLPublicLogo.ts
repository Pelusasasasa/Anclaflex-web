import { supabase } from "@/supabase/client"

export const getPublicURL = async(path: string): Promise<string> => {
    const { data } = await supabase.storage.from('logos').getPublicUrl(path);
    return data.publicUrl
};
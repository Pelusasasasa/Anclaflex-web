import { User } from "@/interface";
import { useAuthStore } from "@/store/useAuthStore";
import { supabase } from "@/supabase/client";

export const useUser = () => {
    const {user, logOut, setUser} = useAuthStore();

    const setActiveUser = async(user: User) => {
        try {
            setUser(user);
        } catch (error) {
            console.log(error);
        };
    };

    const startLogOut = async() => {
        try {
            const { error } = await supabase.auth.signOut();
            if(error) throw new Error('No se pudo cerrar sesion');

            await logOut();
        } catch (error) {
            console.log(error);
        };
    };

    return {

        //Atributos
        user,

        //Metodos
        setActiveUser,
        startLogOut


    }
}
import { User } from "@/interface";
import { useAuthStore } from "@/store/useAuthStore";

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
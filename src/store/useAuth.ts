import { create } from "zustand";

interface User {
    id: string;
    nombre: string;
    email: string;
};

interface AuthState {
    user: User | null;
    token: string | null;
    login: (user: User, token: string) => void;
    logout: () => void;
    loadFormStorage: () => void;
};

export const useAuth = create<AuthState>((set) => ({
    user: null,
    token: null,

    login: (user, token) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        set({user, token})
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        set({ user: null, token: null})
    },
    loadFormStorage: () => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if( user && token){
            set({user: JSON.parse(user), token});
        }
    }
}));


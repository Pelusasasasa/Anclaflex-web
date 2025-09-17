import { User } from "@/interface";
import { create } from "zustand";


interface AuthState{
    user: User | null;
    setUser: (user: User) => void;
    logOut: () => Promise<void>
};


export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
    logOut: async () => {
        set({ user: null });
    }
}));




import { Marca } from "@/interface";
import { create } from "zustand";

interface MarcaState{
    marcas: Marca[] | null;
    setMarcas: (marca: Marca[]) => void;
};

export const userMarcaStore = create<MarcaState>((set) => ({
    marcas: null,
    setMarcas: (marcas: Marca[]) => set({marcas})
}))
import { Marca } from "@/interface";
import { create } from "zustand";

interface MarcaState{
    marcas: Marca[] | [];
    setMarcas: (marca: Marca[]) => void;
    addMarca: (marca: Marca) => void;
    deleteMarca: (id: number) => void;
};

export const userMarcaStore = create<MarcaState>((set) => ({
    marcas: [],
    setMarcas: (marcas: Marca[]) => set({marcas}),
    addMarca: (marca: Marca) => set((state) => {return {marcas: [...state.marcas, marca]}}),
    deleteMarca: (id: number) => set((state) => {
        return {marcas: state.marcas.filter(marca => marca?.id !== id)}
    }),
}));
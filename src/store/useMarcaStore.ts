import { Marca } from "@/interface";
import { create } from "zustand";

interface MarcaState{
    marcas: Marca[] | [];
    activeMarca: Marca | null;
    clearActive: () => void;
    setActiveMarca: (marca: Marca) => void;
    setMarcas: (marca: Marca[]) => void;
    addMarca: (marca: Marca) => void;
    deleteMarca: (id: number) => void;
    patchMarca: (marca: Marca) => void;
};

export const userMarcaStore = create<MarcaState>((set) => ({
    marcas: [],
    activeMarca: null,
    clearActive: () => {
        set({activeMarca: null})
    },
    setMarcas: (marcas: Marca[]) => set({marcas}),
    setActiveMarca: (marca: Marca) => set({activeMarca: marca}),
    addMarca: (marca: Marca) => set((state) => {return {marcas: [...state.marcas, marca]}}),
    deleteMarca: (id: number) => set((state) => {
        return {marcas: state.marcas.filter(marca => marca?.id !== id)}
    }),
    patchMarca: (marca: Marca) => set((state) => {
        return({marcas: state.marcas.map(marcaState => marcaState.id === marca.id ? marca : marcaState)})
    }),
}));
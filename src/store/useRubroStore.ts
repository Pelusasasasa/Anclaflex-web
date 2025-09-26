import { Rubro } from "@/interface";
import { create } from "zustand";

interface RubroState{
    rubros: Rubro[];
    activeRubro: Rubro | null;
    clearActive: () => void;
    setActiveRubro: (rubro: Rubro) => void;
    setRubros: (rubros: Rubro[]) => void;
    addRubro: (rubro: Rubro) => void;
    deleteRubro: (id: number) => void;
    patchRubro: (rubro: Rubro) => void;
};


export const useRubroStore = create<RubroState>((set) => ({
    rubros: [],
    activeRubro: null,
    clearActive: () => {
        set({activeRubro: null})
    },
    setActiveRubro:(rubro: Rubro) => set({activeRubro: rubro}),
    setRubros: (rubros: Rubro[]) => set({rubros}),
    addRubro: (rubro: Rubro) => set((state) => {
        return {rubros: [...state.rubros, rubro]}
    }),
    deleteRubro: (id: number) => set((state) => {
        return {rubros: state.rubros.filter(rubro => rubro.id !== id)}
    }),
    patchRubro: (rubro: Rubro) => set((state) => {
        return({rubros: state.rubros.map(rubroState => rubroState.id === rubro.id ? rubro : rubroState)})
    }),
}))
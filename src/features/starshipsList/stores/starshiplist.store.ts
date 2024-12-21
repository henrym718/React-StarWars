import { create } from "zustand";
import { Result } from "@StarshipsList/types/starship.types";
import { StarshipListServices } from "@StarshipsList/services/starshipList.services";

interface State {
    starships: Result[];
    page: number;
    hasMore: boolean;
    isLoading: boolean;
    error: string | null;

    fetchStarships: (reset: boolean) => Promise<void>;
}

export const useStarshiplistStore = create<State>((set, get) => ({
    starships: [],
    page: 1,
    hasMore: true,
    isLoading: false,
    error: null,

    fetchStarships: async (reset = false) => {
        if (get().isLoading || !get().hasMore) return;
        set({ isLoading: true, error: null });
        const currentPage = reset ? 1 : get().page;
        try {
            const response = await StarshipListServices.getStarships(currentPage);

            if (!response.success) throw new Error(response.message);

            set((state) => ({
                starships: reset ? response.data.results : [...state.starships, ...response.data.results],
                hasMore: !!response.data.next,
                page: currentPage + 1,
                isLoading: false,
            }));
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : "Unknow error",
                isLoading: false,
            });
        }
    },
}));

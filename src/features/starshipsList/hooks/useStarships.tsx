import { useStarshiplistStore } from "@StarshipsList/stores/starshiplist.store";

export function useStarships() {
    const store = useStarshiplistStore((state) => state);

    if (!store.starships.length) {
        store.fetchStarships(true);
    }

    return store;
}

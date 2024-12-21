import { StarshipList } from "@StarshipsList/components/StarshipList";
import { useStarships } from "@StarshipsList/hooks/useStarships";

export function StarshipsListPage() {
    const { fetchStarships, starships, error, hasMore, isLoading } = useStarships();

    console.log({ isLoading });

    if (isLoading) {
        return <div>....loading</div>;
    }

    if (error) return <div>...error</div>;

    const loadMore = () => hasMore && fetchStarships(false);

    return (
        <div className=" flex flex-col ">
            <StarshipList starships={starships} />;
            {hasMore ? (
                <button onClick={loadMore} className=" mx-auto rounded-md w-28 h-12 bg-[#d9c041] text-[#141414] font-bold">
                    Mostrar más
                </button>
            ) : null}
        </div>
    );
}

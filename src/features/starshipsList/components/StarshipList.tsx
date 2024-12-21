import { Link } from "react-router-dom";
import { Result } from "@StarshipsList/types/starship.types";
import { StarshipCard } from "@StarshipsList/components/StarshipCard";
import { extractIdFromUrl } from "@Shared/utils/extracParamFromUrl";
import { transformStringToUrl } from "@Shared/utils/transformStringToUrl";

interface Props {
    starships: Result[];
}
export function StarshipList({ starships }: Props) {
    return (
        <div className="flex flex-col gap-8 w-1/2 mx-auto py-10">
            {starships.map((starship) => (
                <Link key={starship.url} to={`/starships/${extractIdFromUrl(transformStringToUrl(starship.url), 1)}`}>
                    <StarshipCard starship={starship} />
                </Link>
            ))}
        </div>
    );
}

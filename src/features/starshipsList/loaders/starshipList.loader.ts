import { StarshipListServices } from "../services/starshipList.services";
import { ApiResponse } from "../../../shared/types/types";
import { StarShips } from "../types/starship.types";
import { LoaderFunction } from "react-router-dom";

export const starshipListLoader: LoaderFunction = async ({ request }): Promise<ApiResponse<StarShips>> => {
    const url = new URL(request.url);
    const queryPage = Number(url.searchParams.get("page")) || 1;
    return await StarshipListServices.getStarships(queryPage);
};

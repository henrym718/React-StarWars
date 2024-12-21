import { LoaderFunction } from "react-router-dom";
import { ApiResponse } from "../../../shared/types/types";
import { StarshipService } from "../services/starship.services";
import { StarShip } from "../types/starship.types";

export const starshipLoader: LoaderFunction = async ({ params }): Promise<ApiResponse<StarShip>> => {
    const { id } = params;

    if (!id) {
        throw new Response("ID no proporcionado", { status: 400 });
    }
    return await StarshipService.getStarshipById(id);
};

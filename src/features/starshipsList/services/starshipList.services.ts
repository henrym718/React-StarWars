import { starshipListEndpoints } from "@StarshipsList/api/starshipList.endpoints";
import { StarShips } from "@StarshipsList/types/starship.types";
import { axiosInstance } from "@Shared/api/instance/axiosInstance";
import { responseAdapter } from "@Shared/api/adapters/responseAdapter";
import { errorAdapter } from "@Shared/api/adapters/errorAdapter";
import { ApiResponse } from "@Shared/types/types";
import { AxiosError } from "axios";

export class StarshipListServices {
    static async getStarships(page: number): Promise<ApiResponse<StarShips>> {
        try {
            const { data } = await axiosInstance.get<StarShips>(starshipListEndpoints.starshipList(page));
            return responseAdapter(data);
        } catch (error) {
            return errorAdapter(error as AxiosError);
        }
    }
}

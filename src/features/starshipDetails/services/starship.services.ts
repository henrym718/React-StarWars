import { ApiResponse } from "@Shared/types/types";
import { StarShip } from "@StarshipDetails/types/starship.types";
import { axiosInstance } from "@Shared/api/instance/axiosInstance";
import { starshipEndpoints } from "@StarshipDetails//api/starship.endpoints";
import { responseAdapter } from "@Shared/api/adapters/responseAdapter";
import { errorAdapter } from "@Shared/api/adapters/errorAdapter";
import { AxiosError } from "axios";

export class StarshipService {
    static async getStarshipById(id: string): Promise<ApiResponse<StarShip>> {
        try {
            const { data } = await axiosInstance.get<StarShip>(starshipEndpoints.getStarshipById(id));
            return responseAdapter(data);
        } catch (error) {
            return errorAdapter(error as AxiosError);
        }
    }
}

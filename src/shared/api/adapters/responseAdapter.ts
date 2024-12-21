import { ApiResponse } from "../../types/types";

export const responseAdapter = <T>(data: T): ApiResponse<T> => {
    return {
        success: true,
        data,
        message: "Datos obtenidos con exito",
    };
};

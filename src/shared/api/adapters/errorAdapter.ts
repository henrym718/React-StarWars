import { AxiosError } from "axios";
import { ApiResponse } from "../../types/types";

export const errorAdapter = (error: AxiosError): ApiResponse<never> => {
    if (error.request) {
        return {
            success: false,
            message: "Error de red",
        };
    }

    return {
        success: false,
        message: "Error al realizar la petición",
    };
};

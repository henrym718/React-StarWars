import { useLoaderData } from "react-router-dom";
import { ApiResponse } from "@Shared/types/types";
import { StarShip } from "@StarshipDetails/types/starship.types";

export function StarshipsPage() {
    const response = useLoaderData() as ApiResponse<StarShip>;

    if (!response) {
        return <div>Loading...</div>;
    }

    if (!response.success) {
        return <div>Error: {"hola"}</div>;
    }
    return <div className="text-white">{JSON.stringify(response.data)}</div>;
}

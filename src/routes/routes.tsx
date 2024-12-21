import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@Home/pages/HomePage";
import { StarshipsListPage } from "@StarshipsList/pages/StarshipsListPage";
import { StarshipsPage } from "@StarshipDetails/pages/StarshipsPage";
import { starshipLoader } from "@StarshipDetails/loaders/starship.loader";
import { AuthPage } from "@Auth/pages/AuthPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <AuthPage />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/starships",
        element: <StarshipsListPage />,
    },
    {
        path: "/starships/:id",
        element: <StarshipsPage />,
        loader: starshipLoader,
    },
]);

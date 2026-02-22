import { createBrowserRouter } from "react-router";
import App from "../App";
import PrivateLayout from "../layouts/PrivateLayout";
import Declarations from "../pages/Declarations";
import ErrorPage from "../ErrorPage";
import Home from "../pages/Home";
import Demandes from "../pages/Demandes";
import DeclarationEdit from "../pages/DeclarationEdit";
import DemandeEdit from "../pages/DemandeEdit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "private",
                element: <PrivateLayout />,
                children: [
                    {
                        path: "declarations",
                        element: <Declarations />,
                    },
                    {
                        path: "requests",
                        element: <Demandes />,
                    },
                    {
                        path: "declarations/new",
                        element: <DeclarationEdit />,
                    },
                    {
                        path: "requests/new",
                        element: <DemandeEdit />,
                    },
                ],
            },
        ],
    },
]);

export { router };

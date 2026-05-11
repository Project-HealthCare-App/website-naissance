import { createBrowserRouter } from "react-router";
import App from "../App";
import PrivateLayout from "../layouts/PrivateLayout";
import Declarations from "../pages/declarations/Declarations";
import ErrorPage from "../ErrorPage";
import Demandes from "../pages/demandes/Demandes";
import DeclarationEdit from "../pages/declarations/DeclarationEdit";
import DemandeEdit from "../pages/demandes/DemandeEdit";
import { Navigate } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Login from "../pages/account/Login";
import Profiles from "@/pages/Profiles";
import Notifications from "@/pages/Notifications";
import ActivateAccount from "@/pages/account/ActivateAccount";
import Register from "@/pages/account/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <PublicLayout />,
                children: [
                    {
                        index: true,
                        element: <Navigate to={"/connexion"} />,
                    },
                    {
                        path: "/connexion",
                        element: <Login />,
                    },
                    {
                        path: "/register",
                        element: <Register />,
                    },
                    {
                        path: "/activate",
                        element: <ActivateAccount />,
                    },
                ],
            },
            {
                path: "private",
                element: <PrivateLayout />,
                children: [
                    {
                        index: true,
                        element: <Navigate to={"/private/declarations"} />,
                    },
                    {
                        path: "declarations",
                        element: <Declarations />,
                    },
                    {
                        path: "declarations/nouvelle-declaration",
                        element: <DeclarationEdit />,
                    },
                    {
                        path: "demandes",
                        element: <Demandes />,
                    },
                    {
                        path: "demandes/nouvelle-demande",
                        element: <DemandeEdit />,
                    },
                    {
                        path: "profiles",
                        element: <Profiles />,
                    },
                ],
            },
        ],
    },
]);

export { router };

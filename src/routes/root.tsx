import { createBrowserRouter } from "react-router";
import App from "../App";
import PrivateLayout from "../layouts/PrivateLayout";
import Declarations from "../pages/Declarations";
import ErrorPage from "../ErrorPage";
import Home from "../pages/Home";
import Demandes from "../pages/Demandes";

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
                ],
            },
        ],
    },
]);

export { router };

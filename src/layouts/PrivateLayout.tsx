import { Outlet, useLocation } from "react-router";
import Nav from "../components/nav/Nav";

function PrivateLayout() {
    const location = useLocation();

    const title = location.pathname.includes("declarations")
        ? "Déclarations"
        : location.pathname.includes("requests")
            ? "Demandes"
            : "";

    return (
        <section className="border-4 border-red-700 min-h-screen">
            <Nav />
            <main className="wrapper pl-64 pr-10">
                <header className="flex justify-between my-3 italic font-bold text-blue-500 text-2xl">

                    <h3>{title}</h3>
                    <h3>
                        Adriel Simo
                    </h3>
                </header>
                <Outlet />
            </main>
        </section>
    )
}

export default PrivateLayout
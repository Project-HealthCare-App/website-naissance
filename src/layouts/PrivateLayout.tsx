import { Outlet } from "react-router";
import Nav from "../components/nav/Nav";

function PrivateLayout() {
    return (
        <section className="border-4 border-red-700 min-h-screen">
            <Nav />
            <main className="wrapper pl-64 pr-10">
                <Outlet />
            </main>
        </section>
    )
}

export default PrivateLayout
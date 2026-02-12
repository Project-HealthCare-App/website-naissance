import { Outlet } from "react-router";

function PrivateLayout() {
    return (
        <section className="border border-red-300">
            PrivateLayout
            <Outlet />
        </section>
    )
}

export default PrivateLayout
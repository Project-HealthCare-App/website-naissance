import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import { useContext } from "react";
import { GlobalApplicationContext } from "../context/global/GlobalApplicationContextProvider";
import { Navigate } from "react-router-dom";


function PrivateLayout() {
    const {
        state: { title, token },
    } = useContext(GlobalApplicationContext);

    return (
        <>
            {token ? (
                <section className="min-h-screen">
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
            ) : (<Navigate to={"/connexion"} />

            )}
        </>

    )
}

export default PrivateLayout
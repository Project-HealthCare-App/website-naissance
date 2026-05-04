import { useContext, useEffect } from "react";
import { GlobalApplicationContext } from "../../context/global/GlobalApplicationContextProvider";
import { useQuery } from "@tanstack/react-query";
import { search } from "@/services";

function Header() {
    const {
        state: { title, token },
        setCurrentUser,
    } = useContext(GlobalApplicationContext);


    const { data, isLoading } = useQuery({
        queryKey: ["user-profile"],
        queryFn: () => search({ path: "profiles/read", token }),
        retry: 2

    });

    useEffect(() => {
        setCurrentUser(data);

    }, [data]);

    if (isLoading) {
        <header className="flex justify-between italic font-bold text-blue-500 text-2xl">

            <h3>{title}</h3>

        </header>
    }

    return (
        <header className="flex justify-between italic font-bold text-blue-500 text-2xl">

            <h3>{title}</h3>
            <span>
                {data?.lastName} {data?.firstName}
            </span>
        </header>
    )
}

export default Header
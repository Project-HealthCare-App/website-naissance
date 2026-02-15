import { search } from "@/services";
import type { Request } from "@/types/Request";
import { useEffect, useState } from "react";

function useDemandes () {
    const [demandes, setDemandes] = useState<Request[]>([]);
    const getDemandes = async () => {
        const data = await search("requests");
        setDemandes(data);

    }
    useEffect(() => {
        getDemandes();
    }, []);

    return { demandes };
}

export { useDemandes }
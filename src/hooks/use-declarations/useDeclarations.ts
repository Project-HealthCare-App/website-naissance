import { search } from "@/services";
import type { Declaration } from "@/types/Declaration";
import { useEffect, useState } from "react";

function useDeclarations () {
    const [declarations, setDeclarations] = useState<Declaration[]>([]);
    const getDeclaration = async () => {
        const data = await search("declarations");
        setDeclarations(data);
    }
    useEffect(() => {
        getDeclaration();
    }, []);

    return { declarations };
}

export { useDeclarations }
import { search } from "@/services";
import type { Request } from "@/types/Request";
import { useEffect, useState } from "react";

function useDemandes () {
    const [statusOrder, setStatusOrder] = useState(1);
    const [demandes, setDemandes] = useState<Request[]>([]);
        const sortByStatus = () => {
         const sortedDemandes = demandes.sort((itemOne: Request, itemTwo: Request) => {
                const {status: itemOneStatus} = itemOne;
                const {status: itemTwoStatus} = itemTwo;
                let result =0;
                 if (itemOneStatus > itemTwoStatus) {
                    result = 1;
                } else if (itemOneStatus < itemTwoStatus) {
                    result = -1;
                }
                setStatusOrder(statusOrder * -1);
                return result * statusOrder;
            });
            setDemandes([...sortedDemandes]);
        };
    const getDemandes = async () => {
        const data = await search("requests");
        setDemandes(data);

    }
    useEffect(() => {
        getDemandes();
    }, []);

    return { demandes, sortByStatus };
}

export { useDemandes }
import { search } from "@/services";
import type { Request } from "@/types/Request";
import { useEffect, useState } from "react";

function useDemandes () {
    const [statusOrder, setStatusOrder] = useState(1);
    const [dateOrder, setDateOrder] = useState(1);
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

        const sortByDate = () => {
             const sortedDemandes = demandes.sort(({registered: itemOneDate}: Request, {registered: itemTwoDate}: Request) => {
                    const jsDateOne = itemOneDate.split(" ")[0];
                    const jsDateTwo = itemTwoDate.split(" ")[0];
                    let result =new Date(jsDateOne).getTime() - new Date(jsDateTwo).getTime();
                    setDateOrder(dateOrder * -1);
                    return result * dateOrder;
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

    return { demandes, sortByStatus, sortByDate };
}

export { useDemandes }
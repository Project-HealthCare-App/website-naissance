import { ApplicationContext } from "@/context/ApplicationContextProvider";
import { search } from "@/services";
import type { Request } from "@/types/Request";
import { useEffect, useState, useRef, useContext } from "react";

function useDemandes () {
    const {state, updateRequest, updateRequestStatus} = useContext(ApplicationContext); 
    const {requests: stateDemandes} = state || {demandes : []};     
    const filterRef = useRef<any>(null);
    const [statusOrder, setStatusOrder] = useState(1);
    const [dateOrder, setDateOrder] = useState(1);
    const [demandes, setDemandes] = useState<Request[]>([]);
    const [filteredDemandes, setFilteredDemandes] = useState<Request[]>(stateDemandes as []);


    // Synchroniser les déclarations locales avec celles du contexte
    useEffect(() => {
        setDemandes(stateDemandes as []); 
        setFilteredDemandes(stateDemandes as []);
    }, [stateDemandes]);

    /*const updateStatusWithoutContext = (data: { id: string, status: string }) => {
        const toUpdate = demandes.filter(({id}: Request) => id === data.id)[0];
        const updated = {...toUpdate, status: data.status};

        const toKeep = demandes.filter(({id}: Request) => id !== data.id);
        setDemandes([...toKeep, updated]);
    };*/

    const updateStatus = (data: { id: string, status: string }) => updateRequestStatus(data);


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
            
        
    const filterDemandes = () => {
        const filter = filterRef.current.value.toLowerCase() || "";
        if (filter.length >= 2) {
           const filteredDemandes = demandes.filter(item =>{
                const {child: {firstName, lastName}} = item;
                return ( 
                    firstName.toLowerCase().indexOf(filter.toLowerCase()) > -1 
                || lastName.toLowerCase().includes(filter.toLowerCase()))
            });
            setFilteredDemandes([...filteredDemandes]);
        } else {
            setFilteredDemandes([...demandes]);
        }
    };

    const getDemandes = async () => {
        const data = await search("requests");
        setDemandes(data);
        updateRequest(data);
    }
    useEffect(() => {
        getDemandes();
    }, []);

    return { demandes, filteredDemandes, sortByStatus, sortByDate, filterRef, filterDemandes, updateStatus };
}

export { useDemandes }
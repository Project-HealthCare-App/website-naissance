import { ApplicationContext } from "@/context/ApplicationContextProvider";
import { search } from "@/services";
import type { Declaration } from "@/types/Declaration";
import { useEffect, useState, useRef, useContext } from "react";

function useDeclarations () {
    const {state, updateDeclaration, updateDeclarationStatus} = useContext(ApplicationContext);
    const filterRef = useRef<any>(null);
    const [statusOrder, setStatusOrder] = useState(1);
    const [dateOrder, setDateOrder] = useState(1);
    const [declarations, setDeclarations] = useState<Declaration[]>([]);
    const [filteredDeclarations, setFilteredDeclarations] = useState<Declaration[]>(state.declarations);

    // Synchroniser les déclarations locales avec celles du contexte
    useEffect(() => {
        setDeclarations(state.declarations);
        setFilteredDeclarations(state.declarations);
    }, [state.declarations]);

    /*const updateStatusWithoutContext = (data: { id: string, status: string }) => {
        const toUpdate = declarations.filter(({id}: Declaration) => id === data.id)[0];
        const updated = {...toUpdate, status: data.status};

        const toKeep = declarations.filter(({id}: Declaration) => id !== data.id);
        setDeclarations([...toKeep, updated]);
    };*/

    const updateStatus = (data: { id: string, status: string }) => updateDeclarationStatus(data);

    const sortByStatus = () => {
     const sortedDeclarations = declarations.sort((itemOne: Declaration, itemTwo: Declaration) => {
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
        setDeclarations([...sortedDeclarations]);
    };

    const sortByDate = () => {
     const sortedDeclarations = declarations.sort(({registered: itemOneDate}: Declaration, {registered: itemTwoDate}: Declaration) => {
            const jsDateOne = itemOneDate.split(" ")[0];
            const jsDateTwo = itemTwoDate.split(" ")[0];
            let result =new Date(jsDateOne).getTime() - new Date(jsDateTwo).getTime();
            setDateOrder(dateOrder * -1);
            return result * dateOrder;
        });
        setDeclarations([...sortedDeclarations]);
    };



    const filterDeclarations = () => {
        const filter = filterRef.current.value.toLowerCase() || "";
        if (filter.length >= 2) {
           const filteredDeclarations = declarations.filter(item =>{
                const {child: {firstName, lastName}} = item;
                return ( 
                    firstName.toLowerCase().indexOf(filter.toLowerCase()) > -1 
                || lastName.toLowerCase().includes(filter.toLowerCase()))
            });
            setFilteredDeclarations([...filteredDeclarations]);
        } else {
            setFilteredDeclarations([...declarations]);
        }
    };

    const getDeclaration = async () => {
        const data = await search("declarations");
        setDeclarations(data);
        updateDeclaration(data);
    }
    useEffect(() => {
        getDeclaration();
    }, []);

    return { declarations, filteredDeclarations, filterRef, state, sortByStatus, sortByDate, filterDeclarations, updateStatus };
}

export { useDeclarations }
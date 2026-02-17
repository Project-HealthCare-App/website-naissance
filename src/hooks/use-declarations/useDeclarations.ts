import { search } from "@/services";
import type { Declaration } from "@/types/Declaration";
import { useEffect, useState, useRef } from "react";

function useDeclarations () {
    const filterRef = useRef<any>(null);
    const [statusOrder, setStatusOrder] = useState(1);
    const [dateOrder, setDateOrder] = useState(1);
    const [declarations, setDeclarations] = useState<Declaration[]>([]);
    const [filteredDeclarations, setFilteredDeclarations] = useState<Declaration[]>([]);

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
    }
    useEffect(() => {
        getDeclaration();
    }, []);

    return { declarations, filteredDeclarations, filterRef, sortByStatus, sortByDate, filterDeclarations };
}

export { useDeclarations }
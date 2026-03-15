import type { Request } from "../../types/Request";
import DemandeItem from "./DemandeItem";
import { BiSort } from "react-icons/bi";

type Props = {
    demandes: Request[];
    sortByStatus: () => void;
    sortByDate: () => void;
    updateStatus: (props: any) => void;
};

function DemandesItems(props: Props) {
    const { demandes, sortByStatus, sortByDate, updateStatus } = props;
    return (
        <>
            <article className="grid grid-cols-11 items-center font-bold text-sm italic" >
                <button
                    type="button"
                    className={` p-2 flex justify-between items-center `}
                    onClick={() => sortByDate()}>
                    Date
                    <BiSort />
                </button>
                <span className={` p-2 col-span-2`} >Enfant</span>
                <span className={` p-2`}>Date de Naiss.</span>
                <span className={` p-2 col-span-2`} >Parent</span>
                <span className={` p-2 col-span-2`} >Adresse</span>
                <button
                    type="button"
                    className={` p-2 text-center flex justify-between items-center`}
                    onClick={() => sortByStatus()}>
                    Statut
                    <BiSort />
                </button>
                <span className={` p-2 col-span-2 text-center`}>Actions</span>
            </article>
            {
                demandes && demandes.length ? (
                    <>
                        {
                            demandes.map((item: Request, index: number) => (
                                <DemandeItem action={updateStatus} key={item.id} demande={item} index={index} />
                            ))
                        }
                    </>
                ) : null
            }
        </>
    )
}

export default DemandesItems
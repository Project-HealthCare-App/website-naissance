import type { Request } from "../../types/Request";
import DemandeItem from "./DemandeItem";

type Props = {
    demandes: Request[];
};

function DemandesItems(props: Props) {
    const { demandes } = props;
    return (
        <>
            <article className="grid grid-cols-11 items-center font-bold text-sm italic" >
                <span className={` p-2`}>Date</span>
                <span className={` p-2 col-span-2`} >Enfant</span>
                <span className={` p-2`}>Date de Naiss.</span>
                <span className={` p-2 col-span-2`} >Parent</span>
                <span className={` p-2 col-span-2`} >Adresse</span>
                <span className={` p-2 text-center`}>Statut</span>
                <span className={` p-2 col-span-2 text-center`}>ACTIONS</span>
            </article>
            {
                demandes.map((item: Request, index: number) => (
                    <DemandeItem key={item.id} demande={item} index={index} />
                ))
            }
        </>
    )
}

export default DemandesItems
import DemandesItems from "@/components/demandes/DemandesItems";
import { useDemandes } from "@/hooks";

function Demandes() {
    const { demandes, sortByStatus } = useDemandes();
    return (
        <div className="border border-gray-200 bg-white shadow-md rounded-md">
            <DemandesItems demandes={demandes}
                sortByStatus={sortByStatus} />
        </div >
    );
}

export default Demandes
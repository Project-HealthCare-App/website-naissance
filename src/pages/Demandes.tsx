import DemandesItems from "@/components/demandes/DemandesItems";
import { useDemandes } from "@/hooks";

function Demandes() {
    const { demandes } = useDemandes();
    return (
        <div className="border border-gray-200 bg-white shadow-md rounded-md">
            <DemandesItems demandes={demandes} />
        </div >
    );
}

export default Demandes
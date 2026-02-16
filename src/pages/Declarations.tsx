import { useDeclarations, useDemandes } from "@/hooks";
import DeclarationsItems from "@/components/declarations/DeclarationsItems";

function Declarations() {
    const { declarations } = useDeclarations();
    return (
        <div className="border border-gray-200 bg-white shadow-md rounded-md">
            <DeclarationsItems declarations={declarations} />
        </div >
    );
}

export default Declarations
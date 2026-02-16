import { useDeclarations } from "@/hooks";
import DeclarationsItems from "@/components/declarations/DeclarationsItems";

function Declarations() {
    const { declarations, sortByStatus } = useDeclarations();
    return (
        <div className="border border-gray-200 bg-white shadow-md rounded-md">
            <DeclarationsItems
                declarations={declarations}
                sortByStatus={sortByStatus} />
        </div >
    );
}

export default Declarations
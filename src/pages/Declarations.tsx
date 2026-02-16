import { useDeclarations } from "@/hooks";
import DeclarationsItems from "@/components/declarations/DeclarationsItems";

function Declarations() {
    const { declarations, sortByStatus, sortByDate } = useDeclarations();
    return (
        <div className="border border-gray-200 bg-white shadow-md rounded-md">
            <DeclarationsItems
                declarations={declarations}
                sortByStatus={sortByStatus}
                sortByDate={sortByDate}
            />
        </div >
    );
}

export default Declarations
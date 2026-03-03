import { useDeclarations } from "@/hooks";
import DeclarationsItems from "@/components/declarations/DeclarationsItems";
import { Link } from "react-router-dom";

function Declarations() {
    const { filterRef,
        filteredDeclarations,
        declarations,
        sortByStatus,
        sortByDate,
        filterDeclarations,
        updateStatus } = useDeclarations();
    return (
        <>
            <div className=" bg-white shadow-md rounded-md mb-3 flex items-center justify-between py-3 px-3">
                <input type="text" name="rechercher" id="rechercher" placeholder="Rechercher par Nom ou Prénom de L'enfant"
                    className="bg-gray-200 px-3 py-2 rounded-md w-96 outline-blue-600 "
                    ref={filterRef}
                    onKeyUp={filterDeclarations}
                />
                <Link to={"/private/declarations/new"}
                    className=" bg-green-600 rounded-md block px-3 py-2 text-white">
                    Nouvelle déclaration
                </Link>
            </div >
            <div className="border border-gray-200 bg-white shadow-md rounded-md">
                <DeclarationsItems
                    declarations={filteredDeclarations && filteredDeclarations.length ? filteredDeclarations : declarations}
                    updateStatus={updateStatus}
                    sortByStatus={sortByStatus}
                    sortByDate={sortByDate}
                />
            </div >
        </>
    );
}

export default Declarations
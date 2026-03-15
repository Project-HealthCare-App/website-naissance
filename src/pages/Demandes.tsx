import DemandesItems from "@/components/demandes/DemandesItems";
import { useDemandes } from "@/hooks";
import { Link } from "react-router-dom";

function Demandes() {
    const { demandes,
        filteredDemandes,
        sortByStatus,
        sortByDate,
        filterRef,
        filterDemandes,
        updateStatus } = useDemandes();
    return (
        <>
            <div className=" bg-white shadow-md rounded-md mb-3 flex items-center justify-between py-3 px-3">
                <input type="text" name="rechercher" id="rechercher" placeholder="Rechercher par Nom ou Prénom de L'enfant"
                    className="bg-gray-200 px-3 py-2 rounded-md w-96 outline-blue-600 "
                    ref={filterRef}
                    onKeyUp={filterDemandes}
                />
                <Link to={"/private/requests/new"}
                    className=" bg-green-600 rounded-md block px-3 py-2 text-white">
                    Nouvelle demande
                </Link>
            </div >

            <div className="border border-gray-200 bg-white shadow-md rounded-md">
                <DemandesItems
                    demandes={
                        filteredDemandes && filteredDemandes.length ? filteredDemandes : demandes}
                    updateStatus={updateStatus}
                    sortByStatus={sortByStatus}
                    sortByDate={sortByDate}
                />
            </div >
        </>
    );
}

export default Demandes
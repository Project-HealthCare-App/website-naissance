import { useDeclarations } from "@/hooks";
import DeclarationsItems from "@/components/declarations/DeclarationsItems";
import PageFilter from "@/components/shared/PageFilter";

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

            <PageFilter
                btnLabel="Nouvelle déclaration"
                btnPath="/private/declarations/nouvelle-declaration"
                inputPlaceHolder="Rechercher une declaration"
                action={() => null}
            />

            <div className="border border-gray-200 bg-white shadow-md rounded-md">
                <DeclarationsItems
                    declarations={
                        filteredDeclarations && filteredDeclarations.length
                            ? filteredDeclarations
                            : declarations
                    }
                    updateStatus={updateStatus}
                    sortByStatus={sortByStatus}
                    sortByDate={sortByDate}
                />
            </div >
        </>
    );
}

export default Declarations
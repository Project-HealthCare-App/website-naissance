import { useProfiles } from "@/hooks/useProfiles";
import PageFilter from "@/components/shared/PageFilter";

function Profiles() {
    const { profiles, isLoading, error } = useProfiles();

    if (isLoading) return <p>Chargement...</p>;

    if (error) return <p>Erreur lors du chargement</p>;

    return (
        <>
            {/* TOP BAR */}
            <div className="bg-white shadow-md rounded-md mb-3 flex items-center justify-between py-3 px-3">
                <input
                    type="text"
                    placeholder="Rechercher une personne"
                    className="bg-gray-200 px-3 py-2 rounded-md w-96 outline-blue-600"
                />

                <button className="bg-blue-600 rounded-md px-3 py-2 text-white">
                    Profils
                </button>
            </div>

            {/* TABLE */}
            <div className="border-gray-200 bg-white shadow-md rounded-md overflow-hidden">

                {/* HEADER */}
                <div className="grid grid-cols-4 bg-gray-100 p-3 text-sm font-semibold text-gray-900 items-center italic">
                    <span>Civilité</span>
                    <span>Nom</span>
                    <span>Prénom</span>
                    <span>Email</span>
                </div>

                {/* BODY */}
                {profiles.map((profile: any) => (
                    <div
                        key={profile.id}
                        className="grid grid-cols-4 items-center p-3 text-sm even:bg-white odd:bg-gray-100 hover:bg-blue-100 transition"
                    >
                        <span className="uppercase font-semibold text-gray-900">
                            {profile.civility}
                        </span>

                        <span className="uppercase font-medium text-gray-900">
                            {profile.lastName}
                        </span>

                        <span className="text-gray-900 font-medium">
                            {profile.firstName}
                        </span>

                        <span className="text-gray-900 font-medium">
                            {profile.email}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Profiles;
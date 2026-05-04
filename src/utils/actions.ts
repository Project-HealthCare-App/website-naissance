const getStatusColor = (status: string) => {
    switch (status) {
        case "NEW":
            return "bg-blue-200 text-blue-600 text-center";
        case "ON_GOING":
            return "bg-amber-200 text-amber-600 text-center";
        case "VALIDATED":
            return "bg-green-200 text-green-600 text-center";
        case "REJECTED":
                return "bg-red-200 text-red-600 text-center";
        case "DELETE":
                return "bg-gray-200 text-gray-600 text-center";
        default:
            return "";
    }
}

const getStatusLabel = (status: string) => {
    switch (status) {
        case "NEW":
            return "Nouveau";
        case "ON_GOING":
            return "En cours";
        case "VALIDATED":
            return "Validé";
        case "REJECTED":
            return "Rejeté";
        case "DELETE":
            return "Supprimé";
        default:
            return "";
    }
}

const STATUS = {
    "AGENT": ["NEW", "ON_GOING", "VALIDATED", "REJECTED"],
    "PUBLIC": ["NEW", "DELETE"],
    "ADMINISTRATOR": ["NEW", "DELETE"],
};
export {getStatusColor, getStatusLabel, STATUS};
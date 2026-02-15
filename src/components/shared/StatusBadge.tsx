import { getStatusColor, getStatusLabel } from "../../utils";

type Props = {
    status: string;
};

function StatusBadge({ status }: Props) {
    return (
        <span className={`text-center p-2 ${getStatusColor(status)}`}>
            {getStatusLabel(status)}
        </span>
    )
}

export default StatusBadge
import { STATUS } from "../../utils";
import { getStatusLabel } from "../../utils";

type Props = {
    id: string;
    classes: string;
    children?: React.ReactElement;
    action: (data: { id: string, status: string }) => void;
};
function ActionButton({ id, classes, action }: Props) {
    return (
        <div className={`${classes}`}>
            <select
                onChange={(event) => {
                    const status = event.target.value;
                    action({ id, status });
                }}
            >
                <option value="">Sélectionner</option>
                {STATUS.map((item: string) =>
                    <option key={`${id}-${item}`} value={item}>
                        {getStatusLabel(item)}
                    </option>
                )}
            </select>
        </div>
    );
}

export default ActionButton; 
import { formatDate } from "@/utils";
import ActionButton from "../shared/ActionButton";
import StatusBadge from "../shared/StatusBadge";
import type { Request } from "@/types/Request";

type Props = {
    demande: Request;
    index: number;
    action: (data: { id: string, status: string }) => void;
};

function DemandeItem({ demande: item, index, action }: Props) {
    return (
        <>
            <article
                className={`grid grid-cols-11 border-t border-gray-200 text-sm items-center ${index % 2 === 0 ? 'bg-gray-100' : null}`}
            >
                <span className={` p-2`}>{formatDate(item.registered)}</span>
                <span className={` p-2 col-span-2 flex flex-col`}>
                    <span>{item.child.firstName}</span>
                    <span className="uppercase">{item.child.lastName}</span>
                </span>
                <span className={` p-2`}>{item?.child?.birthDate ? formatDate(item.child.birthDate) : null}</span>
                <span className={` p-2 col-span-2 flex flex-col`}>
                    <span>{item.Parent.firstName}</span>
                    <span className="uppercase">{item.Parent.lastName}</span>
                </span>
                <span className={` p-2 col-span-2 flex flex-col`}>
                    <span >{item.Parent.address}</span>
                </span>
                <StatusBadge status={item.status} />
                <ActionButton classes="m-2 p-2 col-span-2" action={action}
                    id={`${item.id}`}>

                </ActionButton>

            </article>
        </>
    )
}

export default DemandeItem
import type { Declaration } from "../../types/Declaration";
import DeclarationItem from "./DeclarationItem";
import { BiSort } from "react-icons/bi";


type Props = {
    declarations: Declaration[];
    sortByStatus: () => void;
    sortByDate: () => void;
    updateStatus: (props: any) => void;
};

function DeclarationsItems(props: Props) {
    const { declarations, sortByStatus, sortByDate, updateStatus } = props;
    return (
        <>

            <article className="grid grid-cols-12 items-center font-bold text-sm italic" >
                <button
                    type="button"
                    className={` p-2 flex justify-between items-center`}
                    onClick={() => sortByDate()}>
                    Date
                    <BiSort />
                </button>
                <span className={` p-2 col-span-2`} >Enfant</span>
                <span className={` p-2`}>Date de Naiss.</span>
                <span className={` p-2`}>Hôpital</span>
                <span className={` p-2 col-span-2`} >Parent 1</span>
                <span className={` p-2 col-span-2`} >Parent 2</span>
                <button
                    type="button"
                    className={` p-2 text-center flex justify-between items-center`}
                    onClick={() => sortByStatus()}>
                    Statut
                    <BiSort />
                </button>
                <span className={` p-2 col-span-2 text-center`}>Actions</span>
            </article>
            {
                declarations && declarations.length ? (
                    <>
                        {
                            declarations.map((item: Declaration, index: number) => (
                                <DeclarationItem action={updateStatus} key={item.id} declaration={item} index={index} />
                            ))
                        }
                    </>
                ) : null
            }

        </>
    )
}

export default DeclarationsItems
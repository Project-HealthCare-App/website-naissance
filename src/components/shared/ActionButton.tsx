type Props = {
    classes: string;
    children: React.ReactElement;
    action: () => null;
};
function ActionButton({ classes, children, action }: Props) {
    return (
        <button type="button" className={`text-center p-2 ${classes}`} onClick={action}>
            {children}
        </button>

    )
}

export default ActionButton; 
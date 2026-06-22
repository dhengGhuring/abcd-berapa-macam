interface props {
    label: string,
    onClick: () => void,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    disabled?: boolean
}

export const ButtonCompo = ({ label, onClick, startIcon, endIcon, disabled }: props) => {
    return (
        <button disabled={disabled} onClick={onClick} className="w-full max-w-xs bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50">
            <div className="flex items-center gap-2">
                {startIcon}
                {label}
                {endIcon}
            </div>
        </button>
    )
}

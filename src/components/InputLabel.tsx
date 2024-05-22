type InputLabelProps = {
    label: string,
    type: string
}

function InputLabel({ label, type }: InputLabelProps) {
    return (
        <>
            <span className="block text-sm font-medium">{label}</span>
            <input type={type} className="input input-bordered w-full mt-1" />
        </>
    )
}

export default InputLabel
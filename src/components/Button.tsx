type ButtonProps = {
    text: string,
    type?: "submit" | "reset" | "button" | undefined
}

function Button({ text, type }: ButtonProps) {
    return (
        <button type={type} className="btn btn-primary text-xl font-bold w-full">{text}</button>
    )
}

export default Button
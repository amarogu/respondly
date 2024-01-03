interface ButtonProps {
    text: string
    className?: string
}

export default function Button({ text, className }: ButtonProps) {
    return (
        <button className={`border border-orange rounded px-8 py-2 ${className}`}>
            {text}
        </button>
    )
}
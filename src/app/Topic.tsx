interface TopicProps {
    text: string
}

export default function Topic({ text }: TopicProps) {
    return (
        <li className="flex gap-2 items-center"><span className="w-2 h-2 inline-block bg-orange rounded-full"></span>{text}</li>
    )
}
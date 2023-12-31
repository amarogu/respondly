interface LinkProps {
    href: string;
    children: React.ReactNode;
}

export default function Link({ href, children }: LinkProps) {
    return (
        <a href={href} className="underline">
            {children}
        </a>
    )
}
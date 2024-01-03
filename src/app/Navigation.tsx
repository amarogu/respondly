import Image from "next/image";
import 'material-symbols';

export default function Navigation() {
    return (
        <nav className="text-body-dark-emphasized">
            <section className="flex gap-3">
                <Image src="/Logomarca.svg" alt="Logomarca" width="100" height="100" />
                <ul className="flex gap-2">
                    <li>Início</li>
                    <li>Planos</li>
                    <li>Sobre</li>
                    <span className="material-symbols-outlined">menu</span>
                </ul>
            </section>
        </nav>
    )
}
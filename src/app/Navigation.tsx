import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navigation() {
    return (
        <nav className="text-body-dark-emphasized flex justify-between">
            <section className="flex gap-3">
                <Image src="/Logomarca.svg" alt="Logomarca" width="100" height="100" />
                <ul className="sm:flex gap-2 hidden">
                    <li>Início</li>
                    <li>Planos</li>
                    <li>Sobre</li>
                </ul>
                
            </section>
            <MenuIcon className="sm:hidden" />
        </nav>
    )
}
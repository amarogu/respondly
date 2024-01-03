import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import Button from "./Button";

export default function Navigation() {
    return (
        <nav className="text-body-dark-emphasized flex items-center justify-between text-[18px]">
            <section className="flex items-center gap-5">
                <Image src="/Logomarca.svg" alt="Logomarca" width={140} height={80} />
                <ul className="sm:flex gap-2 hidden">
                    <li>Início</li>
                    <li>Planos</li>
                    <li>Sobre</li>
                </ul>
            </section>
            <MenuIcon className="sm:hidden" fontSize="large" />
            <Button className="hidden sm:block" text="Entrar" />
        </nav>
    )
}
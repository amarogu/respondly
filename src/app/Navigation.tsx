'use client'
import Image from "next/image";
import Button from "./Button";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function Navigation() {
    
    const [open, setOpen] = useState(false); // initial state is false (menu is closed)

    const toggle = () => {
        setOpen(!open); // toggle between true and false
    };

    return (
        <nav className="text-body-dark-emphasized flex items-center justify-between text-[18px] flex-wrap">
            <section className="flex items-center gap-5">
                <Image src="/Logomarca.svg" alt="Logomarca" width={140} height={80} />
                <ul className="sm:flex gap-2 hidden">
                    <li>Início</li>
                    <li>Planos</li>
                    <li>Sobre</li>
                </ul>
            </section>
            <button onClick={toggle}>
                {open ? <CloseIcon className="sm:hidden" fontSize="large" /> : <MenuIcon className="sm:hidden" fontSize="large" />}
            </button>
            <Button className="hidden sm:block" text="Entrar" />
            <div className={` bg-sky-800 sm:hidden w-screen left-0 top-0 transition-all rounded overflow-hidden absolute -z-10 ${open ? "opacity-1 h-screen" : "opacity-0 h-0"}`} >
                <div className="p-8">
                    <ul className="flex pt-16 flex-col gap-4">
                        <li>Início</li>
                        <li>Planos</li>
                        <li>Sobre</li>
                        <li>
                            <Button text="Entrar" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
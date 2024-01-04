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
        if (!open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    return (
        <nav className="text-body-dark-emphasized flex items-center justify-between flex-wrap">
            <section className="flex items-center gap-5 z-10">
                <Image src="/Logomarca.svg" alt="Logomarca" width={100} height={80} className="sm:mt-[2px]" />
                <ul className="sm:flex gap-2 hidden">
                    <li>Início</li>
                    <li>Planos</li>
                    <li>Sobre</li>
                </ul>
            </section>
            <button onClick={toggle} className="z-10">
                {open ? <CloseIcon className="sm:hidden" fontSize="medium" /> : <MenuIcon className="sm:hidden" fontSize="medium" />}
            </button>
            <Button className="hidden sm:block" text="Entrar" />
            <div className={`bg-slate-950 sm:hidden w-screen left-0 top-0 transition-all rounded overflow-hidden absolute ${open ? "opacity-1 h-screen" : "opacity-0 h-0"}`} >
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
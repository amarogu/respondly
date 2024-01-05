'use client'
import Image from "next/image";
import Link from "./Link";
import Hero1 from '../../public/hero1.png'
import Hero2 from '../../public/hero2.png'
import { useState, useEffect } from "react";

export default function Hero() {

    const [currentImg, setCurrentImg] = useState(Hero1);

    useEffect(() => {
        const handleScroll = () => {
            // Logic to determine when to switch images
            // For example, switch image when the user scrolls past a certain point
            const scrollY = window.scrollY;
            const breakpoint = 100; // Replace with the scroll position you want to trigger the change
            console.log(scrollY)
            if (scrollY < breakpoint) {
                setCurrentImg(Hero1); // Switch to mobile image
            } else {
                setCurrentImg(Hero2); // Switch back to desktop image
            }
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <section className="my-20 flex flex-col gap-20 items-center">
            <div className="text-center flex flex-col gap-6 items-center">
                <h1 className="text-5xl font-bold text-body-dark-emphasized">Título em <span className="bg-orange px-2">destaque</span></h1>
                <p className="max-w-72">
                Eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius.
                </p>
                <Link href="#">
                    Link de exemplo
                </Link>
            </div>
            <Image src={currentImg} alt="Laptop" className="w-full" />
        </section>
    )
}
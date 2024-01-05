import Image from "next/image";
import Link from "./Link";
import HeroImg from '../../public/herodesktop.png'

export default function Hero() {

    return(
        <section className="my-24 flex flex-col gap-24 items-center">
            <div className="text-center flex flex-col gap-3 items-center">
                <h1 className="text-5xl font-bold text-body-dark-emphasized">Título em <span className="bg-orange px-2">destaque</span></h1>
                <p className="max-w-72">
                Eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius.
                </p>
                <Link href="#">
                    Link de exemplo
                </Link>
            </div>
            <Image src={HeroImg} alt="Laptop" className="w-full" />
        </section>
    )
}
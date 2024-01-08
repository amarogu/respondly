import Image from "next/image";
import Button from "./Button";
import Phone1 from '../../public/phone1.png';
import Phone2 from '../../public/phone2.png';

export default function SectionOne() {
    return (
        <section className="flex flex-col sm:flex-row gap-8 sm:justify-between">
            <div className="flex flex-col sm:items-start sm:text-left gap-4 items-center text-center">
                <h2 className="text-4xl font-bold text-body-dark-emphasized">Conteúdo <span className="bg-line">palavra</span></h2>
                <p className="max-w-72">
                Eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius.
                </p>
                <Button text="Clique" />
            </div>
            <div className="flex bg-gradient-phone items-start gap-4 lg:w-[55%] sm:gap-4 lg:gap-24">
                <Image src={Phone1} alt="WhatsApp" />
                <Image src={Phone2} className="mt-8" alt="Instagram" />
            </div>
        </section>
    )
}
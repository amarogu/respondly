import Button from "./Button";
import SocialDesktop from '../../public/socialdesktop.png';
import Image from "next/image";
import Topic from "./Topic";

export default function SectionTwo() {
    return(
        <section className="flex flex-col sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-body-dark-emphasized">Conteúdo Palavra</h2>
                <p>Eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius.</p>
                <ul className="flex flex-col gap-2">
                    <Topic text="Whatsapp: description" />
                    <Topic text="Instagram: description" />
                    <Topic text="Telegram: description" />
                </ul>
            </div>
            <Image src={SocialDesktop} alt="Mídias sociais" />
        </section>
    )
}
import Image from "next/image";
import Button from "./Button";
import Phone1 from '../../public/phone1.png';
import Phone2 from '../../public/phone2.png';

export default function SectionOne() {
    return (
        <section>
            <div>
                <h2>Conteúdo <span>palavra</span></h2>
                <p>
                Eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius.
                </p>
                <Button text="Clique" />
            </div>
            <div>
                <Image src={Phone1} alt="WhatsApp" />
            </div>
        </section>
    )
}
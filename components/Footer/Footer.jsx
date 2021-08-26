import React from "react";
import s from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import whatsappPath from "../../public/static/assets/whatsapp.png";
import facebookPath from "../../public/static/assets/facebook.png";
import instagramPath from "../../public/static/assets/instagram.png";
import phonePath from "../../public/static/assets/phone_icon.png";
import emailPath from "../../public/static/assets/email_icon.png";
import lagunaPath from "../../public/static/assets/laguna_beach.png";
import caminoPath from "../../public/static/assets/camino_verde.png";
import coPath from "../../public/static/assets/co_colombia.png";

const Footer = () => {
  return (
    <footer className={s.container}>
      <div className={s.linksContainer}>
        <Link href="">
          <a>TERMINOS Y CONDICIONES</a>
        </Link>
        <Link href="">
          <a>NUESTRAS POLÍTICAS</a>
        </Link>
        <Link href="">
          <a>PENALIDADES</a>
        </Link>
      </div>
      <div className={s.socialContainer}>
        <p>Siguenos en nuestras redes</p>
        <div className={s.icons}>
          <Image src={whatsappPath} />
          <Image src={instagramPath} />
          <Image src={facebookPath} />
        </div>
      </div>
      <div className={s.contactContainer}>
        <p>Escríbenos o llámanos</p>
        <div className={s.contactInfo}>
          <Image src={phonePath} width={16} height={16} />
          <p>(+ 57) 314 525 1610 (+57) 314 551 9353</p>
        </div>
        <div className={s.contactInfo}>
          <Image src={emailPath} width={18} height={16} />
          <p>Info@hotelislapalma.com</p>
        </div>
      </div>
      <div className={s.logosContainer}>
        <p>visitanos también en </p>
        <div>
          <Link href="">
            <a>
              <Image src={lagunaPath} />
            </a>
          </Link>
          <Link href="">
            <a>
              <Image src={caminoPath} />
            </a>
          </Link>
          <Link href="">
            <a>
              <Image src={coPath} />
            </a>
          </Link>
        </div>
      </div>
      <p className={s.legalText}>
        2021 Hotel Isla Palma - todos los derechos reservados. RNT No. 53813 -
        NIT. 900.648.506-1
      </p>
    </footer>
  );
};

export default Footer;

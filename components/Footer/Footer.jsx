import React, { useState, useEffect } from "react";
import s from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import whatsappPathM from "../../public/static/assets/whatsapp.png";
import facebookPathM from "../../public/static/assets/facebook.png";
import instagramPathM from "../../public/static/assets/instagram.png";
import phonePath from "../../public/static/assets/phone_icon.png";
import emailPath from "../../public/static/assets/email_icon.png";
import lagunaPath from "../../public/static/assets/laguna_beach.png";
import caminoPath from "../../public/static/assets/camino_verde.png";
import coPath from "../../public/static/assets/co_colombia.png";

import whatsappPathD from "../../public/static/assets/whatsappD.png";
import facebookPathD from "../../public/static/assets/facebookD.png";
import instagramPathD from "../../public/static/assets/instagramD.png";

import logoPath from "../../public/static/assets/logoFooter.png";

const Footer = () => {
  const [size, setSize] = useState(null);

  useEffect(() => {
    setSize(screen.width);
  }, []);

  return (
    <footer className={s.container}>
      <div className={s.linksContainer}>
        <Link href="/conditions">
          <a>TERMINOS Y CONDICIONES</a>
        </Link>
        <Link href="/politics">
          <a>NUESTRAS POLÍTICAS</a>
        </Link>
        <Link href="/sansions">
          <a>PENALIDADES</a>
        </Link>
      </div>
      <div className={s.socialContainer}>
        <p className={s.text}>Síguenos en nuestras redes</p>
        <div className={s.icons}>
          <Link href="https://wa.link/5x4d89">
            <a>
              <Image src={size < 768 ? whatsappPathM : whatsappPathD} />
            </a>
          </Link>
          <Link href="https://instagram.com/hotel_islapalma?utm_medium=copy_link">
            <a target="_blank">
              <Image src={size < 768 ? instagramPathM : instagramPathD} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/isla.palma.1884">
            <a target="_blank">
              <Image src={size < 768 ? facebookPathM : facebookPathD} />
            </a>
          </Link>
        </div>
      </div>
      <div className={s.contactContainer}>
        <p className={s.text}>Escríbenos o llámanos</p>
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
        {size < 768 ? (
          <div></div>
        ) : (
          <div className={s.imgContainer}>
            <Image src={logoPath} />
          </div>
        )}
        <div className={s.subContainer}>
          <p>Visitanos también en </p>
          <div>
            <Link href="/">
              <a>
                <Image src={lagunaPath} />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image src={caminoPath} />
              </a>
            </Link>
            <Link href="/">
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
        <p className={s.legalText}>
          Desarrollado por <a href="https://devinmed.com">Dev in Med</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

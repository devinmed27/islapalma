import React, { useState } from "react";
import Image from "next/image";
import s from "./Header.module.scss";
import { es_lang } from "../../utils/translations/home";
import logoPath from "../../public/static/assets/logo.png";
import barsPath from "../../public/static/assets/menu.png";
import Link from "next/link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={s.atomcontainerheader}>
      <div className={s.lang}>{`${es_lang.header.lang_selector}/`} </div>
      <Link href="/">
        <a onClick={()=>setOpenMenu(false)}>
          <Image height={44} width={54} src={logoPath} placeholder="blur" />
        </a>
      </Link>
      <div>
        <Image
          onClick={handleMenuToggle}
          className={s.barsImage}
          src={barsPath}
        />
        <nav
          className={[
            s.navMenu,
            openMenu ? s.navMenuOpen : s.navMenuClose,
          ].join(" ")}
        >
          <Link href="/">
            <a onClick={handleMenuToggle}>
              <Image
                height={90}
                width={120}
                src={logoPath}
                placeholder="blur"
              />
            </a>
          </Link>
          <ul>
            <li onClick={handleMenuToggle}>
              <Link href="/rooms">
                <a>Habitaciones</a>
              </Link>
            </li>
            <li onClick={handleMenuToggle}>
              <Link href="/experiences">
                <a>Experiencias</a>
              </Link>
            </li>
            <li onClick={handleMenuToggle}>
              <Link href="/promos">
                <a>Planes</a>
              </Link>
            </li>
            <li onClick={handleMenuToggle}>
              <Link href="/gallery">
                <a>Galería</a>
              </Link>
            </li>
            <li className={s.btnReserva}>
              <a
                href={process.env.BOOK_URL_ES}
                target="_blank"
              >
                Reserva ahora
              </a>
            </li>
            <li onClick={handleMenuToggle}>
              <Link href="/location">
                <a>¿Cómo llegar?</a>
              </Link>
            </li>
            <li onClick={handleMenuToggle}>
              <Link href="/contact">
                <a>Contáctanos</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
